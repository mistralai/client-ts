import { Mistral } from "@mistralai/mistralai";

const apiKey = process.env["MISTRAL_API_KEY"];
if (!apiKey) {
  throw new Error("missing MISTRAL_API_KEY environment variable");
}

const client = new Mistral({ apiKey });

// A skill = model-facing instructions (`description` + `body`) plus optional
// companion `assets`, all versioned together. `description` is what tells the
// agent when to use the skill, so it is part of the versioned definition.
// `aliases` are movable labels; `main` marks the runnable version.
const skill = await client.beta.skills.create({
  name: "release-notes",
  definition: {
    description: "Use when turning merged PRs into release notes.",
    body: "# Release notes\nGroup changes under Added / Fixed / Changed.",
    assets: {
      "template.md": {
        textContent: "## Added\n## Fixed\n## Changed",
        isExecutable: false,
      },
    },
  },
  notes: "initial",
  aliases: ["main"],
});
const skillId = skill.id!;
console.log(
  `created skill ${skillId} (v${skill.version}), assets: ${Object.keys(
    skill.definition?.assets ?? {},
  )}`,
);

// Improve the instructions -> new immutable version, and move `main` to it in
// one call (passing aliases on createVersion re-points them to the new version).
const version = await client.beta.skills.createVersion(skillId, {
  definition: {
    description:
      "Use when turning merged PRs into release notes, grouped by type.",
    body: "# Release notes v2\nGroup changes under Added / Fixed / Changed / Security.",
  },
  notes: "add Security section",
  aliases: ["main"],
});
console.log(`published v${version.version}, moved 'main' to it`);

const runnable = await client.beta.skills.get({ skillId, alias: "main" });
console.log(
  `main -> v${runnable.version}: ${runnable.definition?.description}`,
);

await client.beta.skills.delete({ skillId });
