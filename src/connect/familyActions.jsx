import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for routing in React Router v6
import { FamilyNotifier } from './familyNotifier';  // Custom notifier for family-related actions
import './familyActions.css';

export function FamilyActions(props) {
  const userName = props.userName;
  const navigate = useNavigate();  // Use the navigate function for routing

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
      // Navigate to the calendar page
      navigate('/calendar');  // Redirect to calendar page

      // Optionally, you can set the action type and data for display
      setActionType('Event Added');
      setActionData({});
      FamilyNotifier.broadcastEvent(userName, 'Event', {});
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
