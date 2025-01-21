function combine(arr1: number[], arr2: number[]): number[] {
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, '6']; // Incorrect type

let combined: number[] = combine(arr1, arr2); // Type error at runtime