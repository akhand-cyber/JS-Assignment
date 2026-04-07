function isprime(n){
    if(n<2) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i==0) return false;
    }
    return true;

}

let L = parseInt(prompt("Enter L:"));
let K = parseInt(prompt("Enter K:"));
let R = parseInt(prompt("Enter R:"));

let count = 0;

for(let i=L; i<=R; i++){
    if(i%K !=0) continue;

    let str = i.toString();
    if (str.length < 2) continue;

    let sum=0;
    for(let ch of str){
        sum += parseInt(ch);
    }

    if(isprime(sum)) count++;
}
alert(count);