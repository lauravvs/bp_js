function welcome(userName) {
  alert(
    `Welcome to this BLACKPINK fan site, ${userName}, to get into the shop and the site, you must answer some questions, ready?`
  );
}

const userName = prompt("type your name");
welcome(userName);

function question(questionText, answer, successMessage) {
  for (let i = 0; i < 3; i++) {
    const userAnswer = prompt(questionText);
    if (userAnswer == answer) {
      alert(successMessage);

      break;
    }
    alert("wrong, try again :c");
  }
}

question("how many members BL has?", "4", "Good job! two questions more");
question("how many albums BL has?", "2", "Good job! last one");
question(
  "What is the name of their last album?",
  "born pink" && "Born Pink",
  "Good!, you can get in"
);

let menu = prompt(
  "What do you want to do now?: \na) EXIT \nb)Know about the merch and prizes \nc)TOP 5 more listened songs "
);

while (menu != "a" && menu != "A") {
  switch (menu) {
    case "b":
      let purchase = prompt(
        "CHOOSE THE PRODUCT YOU WANNA BUY: \na -beanies: $20 \nb- albums: $300 \nc- hoodies: $200 \nd- Membership: $50"
      );

      break;
    case "c":
      alert(
        "\nPINK VENOM \nSHUT DOWN \nHOW YOU LIKE THAT \nDUDUDUDUDU \nLOVESICK GIRLS"
      );
      break;
    case "d":
      break;
    case "d":
      break;
    default:
      alert("You must choose a valid option");
      break;
  }
}
alert("You cannot be part of this fanbase :/ ");
