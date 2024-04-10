export function toKebabCase(str) {
  return str
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/([a-z])([A-Z])/g, "$1-$2") // Convert camelCase to kebab-case
    .toLowerCase(); // Convert to lowercase
}
