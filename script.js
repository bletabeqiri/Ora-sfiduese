// var numrat = [10, 20, 30, 40, 50];
// numrat.push(60);
// numrat.splice(2,1);
// console.log(numrat);
// console.log("Numri " + numrat[2] +  " eshte ne pozicionin " + numrat.indexOf(40));

var person = {
    name: "Filan",
    surname: "Fisteku",
    age: 67,
    address: "Prishtina, Kosova",
    changeAddress: function() {
        this.address = prompt("Change your adress here: ");
        console.log(this.address);
    },
    message: function() {
        alert("Happy birthday, " + this.name + ". Congratulations on turning " + this.age);
    }
}

person.changeAddress();
person.message();