
let message_button = document.getElementById("random-button");
let random_message = document.getElementById("random-message");


/*Eight Ball Code */

const eightBall = () => {
    let randomNumber = Math.floor(Math.random()*8)
switch (randomNumber) {
  case 0:
    return "It is certain";
    break;
  case 1:
    return "It is decidedly so";
    break;
  case 2:
    return "Reply hazy try again";
    break;
  case 3:
    return "Cannot predict now";
    break;
  case 4:
    return  "Do not count on it";
    break;
  case 5:
    return  "My sources say no";
    break;
  case 6:
    return  "Outlook not so good";
    break;
  case 7:
    return "Signs point to yes";
    break;
  default:
    return "There seems to be a problem with the program"
    break;
}
}

function showMessage() {
    random_message.innerHTML = eightBall()
    random_message.style.display = "flex";
    message_button.innerHTML = "Not the answer you were looking for? Try again";
    message_button.style.cursor = "default";
  }

message_button.addEventListener("click", showMessage);