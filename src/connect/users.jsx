import React from 'react';

import { GameNotifier } from './gameNotifier';
import './users.css';

export function Users(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    GameNotifier.addHandler(handleGameEvent);

    return () => {
      GameNotifier.removeHandler(handleGameEvent);
    };
  }, [events]); // Ensure the effect re-runs if `events` changes

  function handleGameEvent(event) {
    let newEvents = [event, ...events];
    if (newEvents.length > 10) {
      newEvents = newEvents.slice(0, 10);
    }
    setEvent(newEvents);
  }

  function createMessageArray() {
    const messageArray = [];
    
    // Random messages to choose from
    const randomMessages = [
      "made a new post",
      "created a new event",
      "shared a new photo",
      "shared a new recipe",
      "made a new request",
      "sent you a message"
    ];

    // Random users to choose from
    const randomUsers = ["Alice", "Bob", "Charlie", "Dana", "Eli", "Fiona", "George", "Hannah", "Ivan"];

    // Generate a random message for each event
    for (const [i, event] of events.entries()) {
      // Randomly select a message and user
      const message = randomMessages[Math.floor(Math.random() * randomMessages.length)];
      const user = randomUsers[Math.floor(Math.random() * randomUsers.length)];

      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{user}</span> {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='players bg-white'>
      Welcome
      <span className='player-name'>{userName}</span>
      <div id='player-messages'>{createMessageArray()}</div>
    </div>
  );
}
