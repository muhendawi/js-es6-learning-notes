export default class CarCl {
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




