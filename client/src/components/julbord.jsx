/* eslint-disable no-restricted-globals */

import React, { Component } from "react";

export class Julbord extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showGame: false,
      questions: [
        {
          "id": "cjorme9onlfpp0183azvv1pyq",
          "question": "Amongs the defensive heroes in Overwatch you can find the sniper Widowmaker, climateologist Mei and one viking from Gothenburg. What is the name of the viking?",
          "answer": "Torbjörn"
        },
        {
          "id": "cjorn27pelh6z016703n50zz7",
          "question": "Mention at least 4 of the 8 playable characters in 'Mario kart 64'",
          "answer": "Mario, Luigi, Peach, Toad, Yoshi, Donkey Kong, Wario and Bowser"
        },
        {
          "id": "cjornb0q5lh9i0167ftags8gf",
          "question": "What creatures soul and force is the main character in 'The elder Scrolls V: Skyrim' born with?",
          "answer": "a dragons."
        },
        {
          "id": "cjorne46plhas01670j3e7a4h",
          "question": "In what RPG game series with cult status from Japan, which released the 15th version of the game in 2016, do you almost every time meet a character named Cid?",
          "answer": "Final Fantasy"
        },
        {
          "id": "cjorniyzylg2901838swhdvcm",
          "question": "'Hail to the king, baby!' and 'Come get some!', What game series have been accused by the actor Bruce Campbell to have stolen his one-liners from the Evil-dead movies?",
          "answer": "Duke Nukem"
        },
        {
          "id": "cjornln5ulhfd01671a6sxp8z",
          "question": "What is the name of the fictional city that shares resemblance with New York, in which 'GTA IV' amongst others takes place? ",
          "answer": "Liberty City (The city of liberty)"
        },
        {
          "id": "cjornqrf9lg4t0183vxfgv3vw",
          "question": "'Golden eye 007' to Nintendo 64 was a game that came to define the FPS genre many years after its release in 1997. In many gamer groups there was a house rule that one could not play as one of the characters as it was much shorter than the others and thus harder to hit. What was the name of that character?",
          "answer": "Oddjob"
        },
        {
          "id": "cjornw0dulhie0167y1mnqxtc",
          "question": "With the release of 'Warcraft III' came an map editor which allowed players to create maps to the game which then could be shared with other players. Eul created a map that would become a super success. It was called by players for 'DotA', what is dota a short hand for?",
          "answer": "Defense of the Ancients"
        },
        {
          "id": "cjornx9q6lhiq0167f6fyvk9d",
          "question": "In what game from 1990 could we first meet Marios dino friend Yoshi?",
          "answer": "Super Mario World"
        },
        {
          "id": "cjoro0owulg8x0183b6g7o8na",
          "question": "How many HP do you start with in a game of Heartstone?",
          "answer": "30"
        },
        {
          "id": "cjoro2h2glga10183u8wd084l",
          "question": "In the game Doom you can find a gun labeled 'BFG', what is BFG a short and for?",
          "answer": "Big Fucking Gun"
        },
        {
          "id": "cjoro3np5lgau01830vgjbmqn",
          "question": "What game series got the letter Lambda as logo?",
          "answer": "Half-life"
        },
        {
          "id": "cjoro4uhqlhmn01671tho4ws4",
          "question": "'The burning crusade', 'Cataclysm' and 'Legion' are all expansions to this game, what is the name of the game?",
          "answer": "World of Warcraft"
        },
        {
          "id": "cjoro6au1lhne01675a3n2yez",
          "question": "What is used as battery to the AI 'GLaDOS' after you've connected her to your portal gun in 'Portal 2'?",
          "answer": "A potato"
        }
      ],
      q: -1,
    };

    if (window && window.location) {
      location.getExtraCoins = () => {
        this.setState({
          showGame: true,
          q: 0,
        });
      }
    }
  }

  render() {
    const { showGame, questions, q } = this.state;

    const Hi = () => {
      return (
        <div className="hi-container">
          <p>
            Welcome to the julbord 2018 games! :D
          </p>
          <p>
            This group will go to <a href="https://www.codewars.com">www.codewars.com</a>
          </p>

          <p>
            Login with the given email and password.
          </p>

          <p>In the slack channel you will find the tasks you can do to collect points for your team. 50 points for every task you complete.</p>

          <p>And remember...</p>

          <p className="cheater">
            console.log("Super Mario would look for extraCoins in the location of window. maybe you too could getExtraCoins? ;D");
          </p>
        </div>
      )
    };

    const Q1 = () => {
      if (showGame) {
        const content = [];
        questions.map((question, index) => {
          content.push(
            <div className="question-container">
              <div className="questionBox" key={question.id}>
                <p>{`Question: ${index + 1}`}</p>
                {question.question}
              </div>
            </div>
          );
        })
        return (
          <React.Fragment>
            {content}
          </React.Fragment>
        )
      }
      return false;
    }
    return (
      <div className="main-container">
        {q === -1 ? <Hi /> : null}
        <Q1 />
      </div>
    );
  }
}
