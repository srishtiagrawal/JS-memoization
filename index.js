// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Memoization`;

const fib =(n, memo) => {
  memo = memo || {}
  if(memo[n]) return memo[n]
  return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}
// console.log(fib(5))