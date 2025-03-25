import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];        

  for (let i of pronoun) {
    for (let j of adj) {
      for (let k of noun) {
        console.log(`${i}${j}${k}.com`);
      }
    }
  }
};
