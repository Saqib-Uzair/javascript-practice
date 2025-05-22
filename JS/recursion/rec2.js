// even numbers printed.

function even(n){
    if(n == 1 || n == 0){
        return 1;
    }
    else{

        if (n % 2 == 0){
            console.log(n)
            return n + even(n - 2)
        }
        else {
            return n + even (n - 1);
        }
    }
}

console.log(even(20));