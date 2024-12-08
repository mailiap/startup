import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';  // Use useNavigate for routing in React Router v6
import { FamilyEvent, FamilyNotifier } from './familyNotifier';  // Custom notifier for family-related actions
import './familyActions.css';

export function FamilyActions(props) {
  const userName = props.userName;
  const navigate = useNavigate();

  const [actionType, setActionType] = React.useState('');
  const [actionData, setActionData] = React.useState({});
  const [allowAction, setAllowAction] = React.useState(true); // Similar to allowPlayer in SimonGame

  const buttons = new Map();
  buttons.set('share-recipe', { position: 'share-recipe', ref: React.useRef() });
  buttons.set('add-event', { position: 'add-event', ref: React.useRef() });
  buttons.set('send-message', { position: 'send-message', ref: React.useRef() });

  async function onPressed(action) {
    if (allowAction) {
      setAllowAction(false);


      if (action === 'share-recipe') {
        const recipeName = prompt('Enter recipe name:');
        if (recipeName) {
          const recipeDetails = prompt('Enter the recipe details:');
          if (recipeDetails) {
            setActionType('Recipe Shared');
            setActionData({ recipe });
            FamilyNotifier.broadcastEvent(userName, FamilyEvent.Recipe);
          }
        }
      } else if (action === 'add-event') {
        navigate('/calendar');
        setActionType('Event Added');
        setActionData({});
        FamilyNotifier.broadcastEvent(userName, FamilyEvent.Event);
      } else if (action === 'send-message') {
        const message = prompt('Enter your message:');
        if (message) {
          setActionType('Message Sent');
          setActionData({ msg });
          FamilyNotifier.broadcastEvent(userName, FamilyEvent.Message);
        }
      }

      setAllowAction(true);
    }
  }

  return (
    <div className='family-actions'>
      <div className='controls center'>
        <div className='family-name'>
          Family Actions
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