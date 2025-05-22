function rec(num){
    if (num <= 0){
        return "Done";
    }
    else{
        if(num % 2 == 0){
            console.log(num);
            return num - rec(num - 2);
        }
        else{
            return "Finish";
        }
    }
}

rec(30);

