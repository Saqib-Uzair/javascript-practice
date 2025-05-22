const laptop = {
    specs:{
        ram: "8GB",
        cpu: "Intel i7",
    },
    showSpecs: function (){
        return this.specs;
    }
};


console.log(laptop.showSpecs());

// for (let key in laptop){
//     console.log(key, laptop[key]);
// }