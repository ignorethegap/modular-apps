// import * from "ui-frame";
// import * from "user-state";
import Address from "address";

export function test() {
  var person = new Address({
    firstName: "Christoph",
    lastName: "Burgdorf",
    zip: "8000",
    city: "Zürich"
  });
  // console.info('person:',person.fullName);
  return person;
}

// new Promise
