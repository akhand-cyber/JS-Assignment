function isPalindrome(num) {
    let str = num.toString();
    return str === str.split('').reverse().join('');
}
let N = parseInt(prompt("Enter N:"));
let K = parseInt(prompt("Enter K:"));
let answer = -1;
for (let X = 0; X <= 100000; X++) {
    let val = N + X;
    if (val % K === 0 && isPalindrome(val)) {
        answer = X;
        break;
    }
}
alert(answer);