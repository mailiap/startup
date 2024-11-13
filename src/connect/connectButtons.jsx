import React from 'react';
import { SimonButton } from './simonButton';
import { delay } from './delay';
import { GameEvent, GameNotifier } from './gameNotifier';
import './connectButtons.css';

export function ConnectButtons({ userName }) {
  const buttons = new Map();
  const mistakeSound = new Audio(`/error.mp3`);

  const [allowPlayer, setAllowPlayer] = React.useState(false);
  const [sequence, setSequence] = React.useState([]);
  const [playbackPos, setPlaybackPos] = React.useState(0);

  async function onPressed(buttonPosition) {
    if (allowPlayer) {
      setAllowPlayer(false);
      await buttons.get(buttonPosition).ref.current.press();

      if (sequence[playbackPos].position === buttonPosition) {
        if (playbackPos + 1 === sequence.length) {
          setPlaybackPos(0);
          increaseSequence(sequence);
        } else {
          setPlaybackPos(playbackPos + 1);
          setAllowPlayer(true);
        }
      } else {
        saveScore(sequence.length - 1);
        mistakeSound.play();
        await buttonDance();
      }
    }
  }

  function increaseSequence(previousSequence) {
    const newSequence = [...previousSequence, getRandomButton()];
    setSequence(newSequence);
  }

  React.useEffect(() => {
    if (sequence.length > 0) {
      const playSequence = async () => {
        await delay(500);
        for (const btn of sequence) {
          await btn.ref.current.press();
        }
        setAllowPlayer(true);
      };
      playSequence();
    }
  }, [sequence]);

  async function saveScore(score) {
    const date = new Date().toLocaleDateString();
    const newScore = { name: userName, score, date };

    GameNotifier.broadcastEvent(userName, GameEvent.End, newScore);
    updateScoresLocal(newScore);
  }

  function updateScoresLocal(newScore) {
    let scores = JSON.parse(localStorage.getItem('scores')) || [];
    let found = false;

    for (const [i, prevScore] of scores.entries()) {
      if (newScore.score > prevScore.score) {
        scores.splice(i, 0, newScore);
        found = true;
        break;
      }
    }

    if (!found) scores.push(newScore);
    if (scores.length > 10) scores.length = 10;

    localStorage.setItem('scores', JSON.stringify(scores));
  }

  const buttonArray = Array.from(buttons, ([key, value]) => (
    <SimonButton key={key} ref={value.ref} position={key} onPressed={() => onPressed(key)} />
  ));

  return (
    <div className="bg-white text-light">
      <header className="container-fluid">
        <nav className="navbar fixed-top navbar-white">
          {/* <div id="picture1" className="picture">
            <a href="index.html">
              <img width="400px" src="FC Logo.png" alt="FC Logo" />
            </a>
          </div> */}
        </nav>
      </header>

      <main className="bg-white">

        <div className="center-container">
          <table>
            <tbody>
              <tr>
                <td><button className="button">New Post</button></td>
                <td><button className="button">Events</button></td>
                <td><button className="button">Family Members</button></td>
              </tr>
              <tr>
                <td><button className="button">Photos</button></td>
                <td><button className="button">Recipes</button></td>
                <td><button className="button">Request</button></td>
              </tr>
              <tr>
                <td><button className="button">Messages</button></td>
                <td><button className="button">Profile</button></td>
                <td><button className="button">Alerts</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
