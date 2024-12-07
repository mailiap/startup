import React from 'react';

import { FamilyEvent, FamilyNotifier } from './familyNotifier';  // Updated import
import './users.css';

export function Family(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    FamilyNotifier.addHandler(handleFamilyEvent);  // Listening for family events

    return () => {
      FamilyNotifier.removeHandler(handleFamilyEvent);
    };
  }, []);  // Added dependency array to ensure proper effect cleanup

  function handleFamilyEvent(event) {
    setEvent([...events, event]);  // Adding new family event to state
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown action';
      if (event.type === FamilyEvent.Recipe) {
        message = `shared a recipe: "${event.value.recipeName}"`;
      } else if (event.type === FamilyEvent.Event) {
        message = `added an event: "${event.value.eventName}" to the family calendar`;
      } else if (event.type === FamilyEvent.Message) {
        message = `sent a message: "${event.value.msg}"`;
      }

      messageArray.push(
        <div key={i} className='event'>
          <span className={'player-event'}>{event.from.split('@')[0]}</span>
          {message}
        </div>
      );
    }
    return messageArray;
  }

  return (
    <div className='family'>
      Family Member
      <span className='player-name'>{userName}</span>
      <div id='family-messages'>{createMessageArray()}</div>
    </div>
  );
}
