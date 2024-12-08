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
          const ingredients = prompt('Enter the recipe ingredient and instructions:');
          if (ingredients) {
            setActionType('Recipe Shared');
            setActionData({ recipeName, ingredients });
            FamilyNotifier.broadcastEvent(userName, FamilyEvent.Recipe, { Recipe: recipeName });
          }
        }

      } else if (action === 'add-event') {
        const familyEvent = prompt('Enter name of the family event you want to add:');
        if (familyEvent) {
          navigate('/calendar');
          setActionType('Event Added');
          setActionData({ familyEvent });
          FamilyNotifier.broadcastEvent(userName, FamilyEvent.Event, { Event: familyEvent });
        }
      } else if (action === 'send-message') {
        const messageInput = prompt('Enter your message:');
        if (messageInput) {
          setActionType('Message Sent');
          setActionData({ messageInput });
          FamilyNotifier.broadcastEvent(userName, FamilyEvent.Message, { Message: messageInput });
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
          <Button className='btn2' onClick={() => onPressed('share-recipe')}>Share Recipe</Button>
          <Button className='btn2' onClick={() => onPressed('add-event')}>Add Event</Button>
          <Button className='btn2' onClick={() => onPressed('send-message')}>Send Message</Button>
        </div>
      </div>
    </div>
  );
}