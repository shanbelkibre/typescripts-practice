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


//  you can possible acess all inhirted proparty and methods

let mymotorbike = new car();
mymotorbike.dirve();
mymotorbike.brake();




