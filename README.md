# TypeScript Runtime Type Error in Concatenation

This example demonstrates a subtle runtime type error in TypeScript that can occur when using array concatenation.  TypeScript's type system helps to prevent many errors, but in certain cases where an incorrect type is still assignable, a runtime error can still occur.

The `combine` function correctly expects two arrays of numbers as input. However, the `arr2` array in the example code contains a string element, which, while not a direct violation of the type definition, leads to an array that's not entirely a `number[]`.

The solution involves stricter type checking and handling of potential type mismatches.