// ** MAIL

// array list of accepted users

const acceptedUsers = [
  "marco.rossi@gmail.com",
  "umberto.bianchi@gmail.com",
  "lorem.ipsum@gmail.com",
  "alessandro.neri@gmail.com",
  "admin.dude@gmail.com",
];
console.log(acceptedUsers.length);

let functionNumber = acceptedUsers.length;

// prompt user mail

const userMail = prompt("Inserisci la tua mail").toLowerCase();
console.log(userMail);

// check list

let accepted = 0;

for (let i = 0; i < functionNumber; i++) {
  if (userMail === acceptedUsers[i]) {
    accepted = 1;
    functionNumber = i;
  } else {
    accepted = 0;
  }
}

console.log(accepted);
