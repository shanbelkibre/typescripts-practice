// class vichels {
//     color = "blue"
//     price = 230000
//     mileage = 2


//     dirve() {
//         console.log(`i am driving  ${this.mileage}`)
//     }


//     brake() {
//         console.log(`i am braking  ${this.mileage}`)

//     }

// }

// class car extends vichels {

// }


// //  you can possible acess all inhirted proparty and methods

// let mymotorbike = new car();
// mymotorbike.dirve();
// mymotorbike.brake();







// now implements use 


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

// even delare type with interface is need defined in side implemnt class
interface modele {
    model: string;
    year: number;
}


class car implements vichels, modele {
    //  is need defined each properties and method when use implement key word
    color: string = "red";
    mileage: number = 300;
    price: number = 300000;
    dirve() {
        console.log(`i am driving  ${this.mileage}`)
    }
    brake() {
        console.log(`i am braking  ${this.mileage}`)

    }

    // now defined the interface model
    model = "Toyota";
    year = 2025;
}



