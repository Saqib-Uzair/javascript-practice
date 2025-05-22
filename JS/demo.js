function demo(num){
    if (num % 2 !=0){
        return "ODD";
    }
    else{
        console.log(num);
        return num + demo(num - 1);
    }
}

console.log(demo(10));