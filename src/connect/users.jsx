import React from 'react';

import { FamilyEvent, FamilyNotifier } from './familyNotifier';
import './users.css';

export function Family(props) {
  const userName = props.userName;

  const [events, setEvent] = React.useState([]);

  React.useEffect(() => {
    FamilyNotifier.addHandler(handleFamilyEvent);

    return () => {
      FamilyNotifier.removeHandler(handleFamilyEvent);
    };
  });

  function handleFamilyEvent(event) {
    setEvent([...events, event]);
  }

  function createMessageArray() {
    const messageArray = [];
    for (const [i, event] of events.entries()) {
      let message = 'unknown';
      if (event.type === FamilyEvent.Recipe) {
        message = `shared the recipe: "${event.value.Recipe}"`;
      } else if (event.type === FamilyEvent.Event) {
        message = `added an event to the family calendar`;
      } else if (event.type === FamilyEvent.Msg) {
        message = `sent the message: "${event.value.Msg}" to the whole family`;
      } else if (event.type === FamilyEvent.System) {
        message = event.value.msg;
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
