//1.create a file = npm init
//2. touch .gitignore
import inquirer from "inquirer";
import { generateSlug } from "random-word-slugs";
import chalkAnimation from "chalk-animation";

inquirer
  .prompt([
    {
      type: "number",
      name: "length",
      message: "How long should the band name be",
      default: 3,
    },
    {
      type: "list",
      name: "animationName",
      message: "Which animation would you like",
      default: "rainbow",
      choices: ["rainbow", "pulse", "glitch", "radar", "neon", "karaoke"],
    },
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers);

    const bandName = generateSlug(answers.length, { format: "title" });

    if (answers.animationName === "pulse") {
      chalkAnimation.pulse(bandName);
    } else if (answers.animationName === "rainbow") {
      chalkAnimation.rainbow(bandName);
    } else if (answers.animationName === "neon") {
      chalkAnimation.neon(bandName);
    } else if (answers.animationName === "glitch") {
      chalkAnimation.glitch(bandName);
    } else if (answer.animationName === "radar") {
      chalkAnimation.radar(bandName);
    } else if (answers.animationName === "karaoke") {
      chalkAnimation.karaoke(bandName);
    }
  })
  .catch((error) => console.log(error));
