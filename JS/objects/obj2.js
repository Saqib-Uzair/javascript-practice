const saddam = {
    first_name: 'saddam',
    last_name: 'hussain',
    age: 26,
    email: "saddam@gmail.com",
    fullName: function(){
        return this.first_name + " " + this.last_name;
    }
}

console.log(saddam.fullName());