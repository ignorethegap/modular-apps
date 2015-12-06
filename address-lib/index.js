export class Address {
    constructor(addr) {
        this.firstName = addr.firstName;
        this.lastName = addr.lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// export {Address}
