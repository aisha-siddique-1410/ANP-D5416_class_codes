function sum(a,b){
    return a+b;
}
console.log(sum(2,3));

function greetingSum(text, a, b,sum){
    const result = sum(a,b);

    console.log(text, result);
}

greetingSum("hello!!", 10, 20, sum);