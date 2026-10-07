// uuid.NAMESPACE_DNS (6ba7b810-9dad-11d1-80b4-00c04fd430c8)
const NAMESPACE_DNS = new Uint8Array([
  0x6b, 0xa7, 0xb8, 0x10, 0x9d, 0xad, 0x11, 0xd1,
  0x80, 0xb4, 0x00, 0xc0, 0x4f, 0xd4, 0x30, 0xc8,
]);

/** Python's `uuid.uuid5(uuid.NAMESPACE_DNS, name).hex`. */
async function uuid5DnsHex(name: string): Promise<string> {
  const nameBytes = new TextEncoder().encode(name);
  const input = new Uint8Array(NAMESPACE_DNS.length + nameBytes.length);
  input.set(NAMESPACE_DNS, 0);
  input.set(nameBytes, NAMESPACE_DNS.length);
  const hash = new Uint8Array(await globalThis.crypto.subtle.digest("SHA-1", input));
  const bytes = hash.slice(0, 16);
  bytes[6] = (bytes[6]! & 0x0f) | 0x50;
  bytes[8] = (bytes[8]! & 0x3f) | 0x80;
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function randomHex(): string {
  return globalThis.crypto.randomUUID().replace(/-/g, "");
}

/**
 * Generates a unique ID composed of two parts derived from seeds, like the
 * Python client's `generate_two_part_id`. Missing seeds are random.
 */
export async function generateTwoPartId(
  primarySeed?: string | null,
  secondarySeed?: string | null,
): Promise<string> {
  const first = await uuid5DnsHex(primarySeed || randomHex());
  const second = await uuid5DnsHex(secondarySeed || randomHex());
  return `${first}${second}`;
}
