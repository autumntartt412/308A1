// let counter = 0;
// function inc(counter) {
//     try {
//         inc(counter + 1)
//     }
//     catch (error) {
//         console.log(error);
//         console.log(counter);
//     }
// };
// inc(0);





// * Step One: write the recursive function.
// * 
// * Here, we create a function that calculates
// * the factorial of a number, n. A factorial
// * is the product of all positive integers
// * less than or equal to the number, n.
// */
// const factorial = (n) => {
//  if (n === 0) return 1; // The base case, to stop recursion
//  return n * factorial(n - 50000); // The recursive call
// }

/**
* If we were to call the above with a number as
* high as, say, 50,000, it would result in a stack
* overflow.
*/

/**
 * Step Two: modify the recursive function.
 * 
 * In order to trampoline the function, we must
 * return another function instead of calling
 * the recursive function itself. 
 * 
 * This prevents the function from being added 
 * directly to the call stack.
 */
// const facto = (n, a = 1) => {
//   if (n === 0) return a;
//   return () => facto(n - 1, n * a);
// }

/**
 * Step Three: create a trampoline function.
 * 
 * This function takes another function and a list
 * of arguments, and uses a linear loop rather than
 * traditional recursion to handle the function calls.
 * 
 * This prevents the stack overflow, while still
 * maintaining the declarative approach provided by
 * recursive functions.
 */
// const trampoline = (f, ...args) => {
//  let result = f(...args);
//  while (typeof result === "function") {
//    result = result();
//  }
//  return result;
// }

/**
* Now, we can call the factorial function with as high
* a number as we would like (as long as we don't run into
* other errors, like exceeding MAX_SAFE_INTEGER, or looping
* too many times...).
* 
* Unfortunately, both of these are the case here, but
* the principle of trampolining holds!
*/

//
const facto = (n, a = 1) => {
    if (n < 0) throw new Error("error");
    if (n === 0) return a;
    return () => facto(n - 1, n * a);
  };
console.log(trampoline(facto(10000)))
// recusion function
const factorial = (number) => {
  // base case will be 0
  if(number <= 0) return 1;

  return number * factorial(number - 1)
}
// console.log(factorial(5000));
// similar function (call same function)
const factoraial2 = (number, base = 1) => {
  if(number <= 0) {
    return base;   
    } else {
      return () => factoraial2(number - 1, number * base);
    }
  }
  const trampoline = function(fn) {
    while(typeof fn === 'function') {
      fn = fn();
    }
    return fn();
  }
//  console.log(trampoline(() => factoraial2(50000)));
// console.log(trampoline(() => factoraial2(5)));
console.log(factorial(4));4

const flattenArray = (arr) => {
  if (arr.length === 0) return [];
  const first = array[0];
  const rest = array.slice(1);

  if (Array.isArray(first)) {
    return () => flattenArray(first).concat(flattenArray(fa));
  } else {
    return () => [first].concat(flattenArray(fa));
  }
};

const trampoline = (fn) => {
  while (typeof fn === "function") {
    fn = fn();
  }
  return fn;
};


const array = [4, [5, 6,][ 7, 8], 9];
const flatArray = trampoline(flattenArray(array));
console.log(flatArray);


const primeNumbersDiv = document.getElementById('primeNumbers');

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const primeNums = (a, current = 2) => {
    if (current > n) {
       
       console.log(primeNums);
        return;
    }
    
    if (isPrime(num)) {
        primeNumber.innerHTML += `${num} `;
    }
    
    setTimeout(() => primeNums(a, num + 1), 0);
};

primeNums(10000);