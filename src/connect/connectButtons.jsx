import React from 'react';
import { Button } from 'react-bootstrap';
import { FamilyNotifier } from './familyNotifier';  // Custom notifier for family-related actions
import './connectButtons.css';

export function FamilyActions(props) {
  const userName = props.userName;

  const [actionType, setActionType] = React.useState('');
  const [actionData, setActionData] = React.useState({});

  // Handle button press
  async function onPressed(action) {
    if (action === 'share-recipe') {
      // Example of sharing a recipe
      const recipe = prompt('Enter recipe details:');
      if (recipe) {
        setActionType('Recipe Shared');
        setActionData({ recipe });
        FamilyNotifier.broadcastEvent(userName, 'Recipe', { recipe });
      }
    } else if (action === 'add-event') {
      // Example of adding a family event
      const eventName = prompt('Enter event name:');
      const eventDate = prompt('Enter event date (e.g., 12/25/2024):');
      if (eventName && eventDate) {
        setActionType('Event Added');
        setActionData({ eventName, eventDate });
        FamilyNotifier.broadcastEvent(userName, 'Event', { eventName, eventDate });
      }
    } else if (action === 'send-message') {
      // Example of sending a message
      const message = prompt('Enter your message:');
      if (message) {
        setActionType('Message Sent');
        setActionData({ message });
        FamilyNotifier.broadcastEvent(userName, 'Message', { message });
      }
    }
  }

  return (
    <div className='family-actions'>
      <div className='controls center'>
        <div className='family-name'>
          Family Actions
        </div>
        <div className='action-status'>
          {actionType && `${actionType}: ${JSON.stringify(actionData)}`}
        </div>
        <div className='button-container'>
          <Button variant='primary' onClick={() => onPressed('share-recipe')}>Share Recipe</Button>
          <Button variant='primary' onClick={() => onPressed('add-event')}>Add Event</Button>
          <Button variant='primary' onClick={() => onPressed('send-message')}>Send Message</Button>
        </div>
      </div>
    </div>
  );
}
