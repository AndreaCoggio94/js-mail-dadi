// ** MAIL

// array list of accepted users

const acceptedUsers = [
  "marco.rossi@gmail.com",
  "umberto.bianchi@gmail.com",
  "lorem.ipsum@gmail.com",
  "alessandro.neri@gmail.com",
  "admin.dude@gmail.com",
];

// prompt user mail

const userMail = prompt("Inserisci la tua mail").toLowerCase();

// check list

let accepted = 0;

for (let i = 0; i < acceptedUsers.length; i++) {
  if (userMail === acceptedUsers[i]) {
    accepted = 1;
  }
}

// popup message

if (accepted == 0) {
  let errorPrint = document.querySelector("h1");
  errorPrint.innerHTML = "Inserire nuovamente la mail, facendo attenzione";
} else if (accepted == 1) {
  //   number generators

  let userNumber = Math.floor(Math.random() * 6 + 1);

  let websiteNumber = Math.floor(Math.random() * 6 + 1);

  let print = document.querySelector(".result");

  if (userNumber == websiteNumber) {
    print.innerHTML =
      "Il tuo numero è " +
      userNumber +
      " quello del sito è " +
      websiteNumber +
      " , Sembra proprio una patta !";
  } else if (userNumber < websiteNumber) {
    print.innerHTML =
      "Il tuo numero è " +
      userNumber +
      " quello del sito è " +
      websiteNumber +
      " , Mi dispiace ritenta sarai più fortunato !";
  } else {
    print.innerHTML =
      "Il tuo numero è " +
      userNumber +
      " quello del sito è " +
      websiteNumber +
      " , Complimenti hai vinto !";
  }
}
