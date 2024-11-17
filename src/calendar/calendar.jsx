import React from 'react';
import './calendar.css';

export function Calendar() {
  return (
    <main className="container-fluid bg-light text-center">
      <h2 className="my-4">Family Calendar</h2>
      <div className="calendar-container">
        {/* Embed Google Calendar using iframe */}
        <iframe
          src="https://calendar.google.com/calendar/embed?src=b5d6fa0b1438fd38e9daf9ec54c1531c2c1ced0d9e477b592f6e7692b7ef092b%40group.calendar.google.com&ctz=America%2FDenver"
          style={{ border: 0 }}
          width="800"
          height="600"
          frameBorder="0"
          scrolling="no"
          title="Family Calendar"
        ></iframe>
      </div>
    </main>
  );
}
