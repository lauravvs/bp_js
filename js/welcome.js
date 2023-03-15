function welcome(userName) {
  alert(
    `Welcome to this BLACKPINK fan site, ${userName}, to get into the shop and the site, you must answer some questions, ready?`
  );
}

const userName = prompt("type your name");
welcome(userName);

let check = true;

function question(questionText, answer, successMessage) {
  for (let i = 0; i < 3; i++) {
    const userAnswer = prompt(questionText);
    if (userAnswer == answer) {
      alert(successMessage);
      check = true;
      break;
    }
    alert("wrong, try again :c");
  }
}

if (check) {
  check = false;
  question("how many members BL has?", "4", "Good job! two questions more");
}

if (check) {
  check = false;
  question("how many albums BL has?", "2", "Good job! last one");
}

if (check) {
  check = false;
  question(
    "What is the name of their last album?",
    "BORN PINK" && "born pink",
    "Good!, you can get in"
  );
}

if (check) {
  let menu = prompt(
    "What are you into in?: \na) Nothing :c \nb)Do you wanna know which BLACKPINK member you are? Take this QUIZZ ! \nc)BLACKPINK Songs and add your favorite covers knowing eahc level!"
  );
  while (menu != "a" && menu != "A") {
    switch (menu) {
      case "b" && "B":
        let score = 0;

        let questionOne = "What do you prefer, cold or hot?";
        let answerOne = "cold";
        let userAnswerOne = prompt(questionOne);
        if (userAnswerOne.toUpperCase() === answerOne.toUpperCase()) {
          score++;
        }
        let questionTwo = "What do you prefer, music or dance?";
        let answerTwo = "dance";
        let userAnswerTwo = prompt(questionTwo);
        if (userAnswerTwo.toUpperCase() === answerTwo.toUpperCase()) {
          score++;
        }
        let questionThree = "What do you prefer, parties or chill?";
        let answerThree = "chill";
        let userAnswerThree = prompt(questionThree);
        if (userAnswerThree.toUpperCase() === answerThree.toUpperCase()) {
          score++;
        }
        let questionFour = "What do you prefer, videogames or movies?";
        let answerFour = "videogames";
        let userAnswerFour = prompt(questionFour);
        if (userAnswerFour.toUpperCase() === answerFour.toUpperCase()) {
          score++;
        }
        if (score == 4) {
          alert("Congrats! you are Jisoo!");
        } else if (score == 3) {
          alert("Congrats! you are Jennie!");
        } else if (score == 2) {
          alert("Congrats! you are Rose!");
        } else {
          alert("Congrats! you are Lisa!");
        }

        break;
      case "c" && "C":
        const bpSongs = [
          {
            name: "Lovesick Girls",
            album: "The Album",
            year: 2018,
            level: 3,
          },
          {
            name: "Pink Venom",
            album: "Born Pink",
            year: 2022,
            level: 3,
          },
          {
            name: "Shut Down",
            album: "Born Pink",
            year: 2023,
            level: 8,
          },
          {
            name: "Whistle",
            album: "Square",
            year: 2016,
            level: 8,
          },
          {
            name: "Crazy Over You",
            album: "The Album",
            year: 2018,
            level: 6,
          },
          {
            name: "SOLO",
            album: "JENNIE",
            year: 2020,
            level: 9,
          },
          {
            name: "TALLY",
            album: "BORN PINK",
            year: 2023,
            level: 10,
          },
          {
            name: "GONE",
            album: "R",
            year: 2021,
            level: 9,
          },
        ];

        let name = prompt(
          "add the name of your favorite BLACKPINK COVER to our playlist "
        );
        let album = prompt("Type COVERS to add the song you wrote before");
        let year = prompt("When was this song released?");
        let level = prompt(
          "which level you think this song has? Type a number from 1 to 10"
        );
        let newSong = { name, album, year, level: parseInt(level) };
        bpSongs.push(newSong);

        for (const song of bpSongs) {
          song.level = song.level + 3;
          alert(
            "BLACKPINK SONG NAME: " +
              " " +
              song.name +
              " " +
              "ALBUM: " +
              " " +
              song.album +
              " " +
              "year: " +
              " " +
              song.year +
              " " +
              "with the following level: " +
              " " +
              song.level
          );
        }

        break;

      default:
        alert("You must choose a valid option");
        break;
    }
  }
}
alert("Seems you cannot be part of this fanbase :/ ");
