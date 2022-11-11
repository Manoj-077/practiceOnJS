console.log("hello")

console.log(`the sum is ${2+1}`)

function add(n1,n2){
    return n1+n2;
}

function operation(n1,n2,op){
    return op(n1,n2);
}

console.log(operation(2,5,add));


