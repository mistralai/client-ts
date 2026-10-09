/**
 * Loads an optional peer dependency at runtime. The specifier is dynamic, so
 * bundlers cannot (and must not) statically resolve it: the magic comments
 * keep it as a runtime import for webpack, Turbopack and Vite instead of
 * failing the build of apps that don't install it.
 */
export async function importOptionalModule<T>(
  specifier: string,
  onMissing: (cause: unknown) => Error,
): Promise<T> {
  try {
    return await import(
      /* webpackIgnore: true */ /* turbopackIgnore: true */ /* @vite-ignore */ specifier
    ) as T;
  } catch (error) {
    throw onMissing(error);
  }
}
