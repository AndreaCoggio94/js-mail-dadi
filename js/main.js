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

// prompt user mail

const userMail = prompt("Inserisci la tua mail");
console.log(userMail);

// check list

for (let i = 0; i < acceptedUsers.length; i++) {
  console.log(i);
}
