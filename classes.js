
class CarCl {
    constructor(make, speed,) {
        this.make = make;
        this.speed = speed;

    }
    accelerate() {
        this.speed += 10;
        console.log(`Accelerator is pressed: ${this.make} speeds up to ${this.speed} km/h`);
        return this;
    }
    brake() {
        console.log(`Brakes are pressed: ${this.make} speeds down to ${this.speed = this.speed - 5} km/h`);
    }
    // Getter Method for speed in miles
    get speedUS() {
        return `${this.speed / 1.6} mi/h`;
    }
    // Setter Method for speed in miles
    set speedUS(speed) {
        this.speed = speed * 1.6;
    }
    // Defining Static method inside the class.

}


class EVCl extends CarCl {
    #charge = 0;
    constructor(make, speed, charge) {
        super(make, speed);
        this.#charge = charge;
    }

    chargBattery(chargePercent) {
        this.#charge += chargePercent;
        console.log(`${this.make} is charge to ${this.#charge}%`);
        return this;
    }
}

const tesla = new EVCl('Tesla', 120, 20);
tesla.chargBattery(70).accelerate().accelerate().accelerate();
console.log(tesla.speedUS);

// Delegation instead of inheritance (( Composition)):
/////////////////////////////////////////////////////

class Histogram {
    constructor() {
        this.map = new Map();
    }
    // count method, returns the value of a given key or 0 if the key doesn't exist in the map.
    count(key) {
        return this.map.get(key) || 0;
    }
    // the Set-like has() method returns true if value return from count is non-zero and false if not;
    has(key) {
        return this.count(key) > 0;
    }
    // a getter method for the map size, which is just the number of entries in the map.
    get size() {
        return this.map.size;
    }
    // to add key, just increment it's count in the map.
    // add(key) adds a key and if the key exist it just increment the count of it to know exactly
    add(key) {
        this.map.set(key, this.count(key) + 1);
    }
    // Deleting a key is a little trickier because we have to delete 
    // the key from the Map if the count goes back down to zero
    delete(key) {
        let count = this.count(key);
        if (count === 1) {
            this.map.delete(key);
        } else if (count > 1) {
            this.map.set(key, count - 1);
        }
        return this;
    }
    // Iterating a Histogram just returns the keys stored in it
    [Symbol.iterator]() {
        return this.map.keys();
    }
    keys() {
        return this.map.keys();
    }
    values() {
        return this.map.values();
    }
    entries() {
        return this.map.entries();
    }

}

const histo = new Histogram();
histo.add('a');
histo.add('a');
histo.add('b');
console.log(histo.count('a'));
console.log(histo.count('b'));
histo.delete('a').delete('b')
console.log(histo.count('a'));
console.log(histo.count('b'));



// Class Hierarchy and Abstract Classes.
///////////////////////////////////////
// class ChaviURL extends URL {
//     chaviParams = new URLSearchParams();
//     constructor(url) {
//         super(url);
//     }

// }

// const newnew = new ChaviURL();
// console.log(newnew.chaviParams);