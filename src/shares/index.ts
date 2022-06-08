function isObject(value: Record<string, any>) {
  return value !== null && typeof value === "object";
}

function isArray(value: unknown[]) {
  return Array.isArray(value);
}
export { isObject, isArray };
