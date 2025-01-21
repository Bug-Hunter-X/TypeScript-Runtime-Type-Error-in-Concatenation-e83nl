function combine(arr1: number[], arr2: number[]): number[] {
  //Check if both arrays contain only numbers 
  const isNumberArray = (arr: any[]): boolean => arr.every(element => typeof element === 'number');

  if(!isNumberArray(arr1) || !isNumberArray(arr2)){
    throw new Error ('Both arrays must contain only numbers');
  }
  return arr1.concat(arr2);
}

let arr1: number[] = [1, 2, 3];
let arr2: number[] = [4, 5, 6]; 

let combined: number[] = combine(arr1, arr2); 