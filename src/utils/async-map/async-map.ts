export const asyncMap = async <T = unknown, R = unknown>(
  array: Array<T>,
  fn: (a: T) => Promise<R>
) => {
  const result: Array<R> = []
  for (const a of array) {
    const fnA = await fn(a)
    result.push(fnA)
  }
  return result
}
