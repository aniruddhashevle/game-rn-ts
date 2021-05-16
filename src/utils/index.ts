/**
 * 
 * @param N {number}
 * @returns Array(1...N)
 */
export const generateArrayOfN = (N: number) => Array.from({ length: N }, (_, i) => i + 1);

/**
 * 
 * @param N {number}
 * @returns Array([1, 1], [2, 2], ...[N, N))
 */
export const covertArrayNumsInPairs = (N: number) => {
  let array: Array<number> = generateArrayOfN(N);
  return array.map((elem: number) => ([elem, elem]));
}

/**
 * 
 * @param array {array}
 * @param size {number}
 * @returns {array}
 */
export const getRandomPairs = (array: Array<any>, size: number) => {
  return array.sort(() => .5 - Math.random()).slice(0, size);
}