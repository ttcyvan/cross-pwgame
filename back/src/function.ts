

/**
 * @function isNotNull
 * @description check if all args are not null
 *
 * @param {unknown[]} values - any arguments to checks
 * @return {boolean}
 *
 * @example
 * isNotNull(x, y, z, process.env.PORT)
 *
 */

export const isNotNull = (...values: unknown[]): boolean => {
  for (const v of values) {
    if (v === undefined || v === null) {
      return false
    }
  }
  return true
}
 

