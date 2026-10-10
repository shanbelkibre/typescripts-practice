class vichels {
    color = "blue"
    price = 230000
    mileage = 2


    dirve() {
        console.log(`i am driving  ${this.mileage}`)
    }


    brake() {
        console.log(`i am braking  ${this.mileage}`)

    }

}

class car extends vichels {

}

let mymotorbike = new car();

mymotorbike.dirve();
mymotorbike.brake();
console.log(mymotorbike.mileage);
console.log(mymotorbike.price);



