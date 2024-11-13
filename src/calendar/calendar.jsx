import React from 'react';

import './calendar.css';

export function Calendar() {
  const [events, setEvents] = React.useState([]);

  // Demonstrates calling a service asynchronously to fetch calendar events
  // Placeholder for 3rd-party system integration (e.g., Microsoft Teams calendar API)
  React.useEffect(() => {
    // Placeholder for fetching events from the 3rd-party calendar system
    // In reality, replace this with a call to the Teams calendar API or any calendar service.
    const fetchCalendarEvents = async () => {
      // Simulating the call to fetch data
      const fetchedEvents = [
        {
          id: 1,
          title: 'Team Meeting',
          date: '2024-11-12',
          time: '10:00 AM',
          description: 'Monthly sync with the team'
        },
        {
          id: 2,
          title: 'Project Deadline',
          date: '2024-11-15',
          time: '5:00 PM',
          description: 'Final project submission'
        },
        {
          id: 3,
          title: 'Code Review',
          date: '2024-11-16',
          time: '2:00 PM',
          description: 'Code review with peers'
        }
      ];

      setEvents(fetchedEvents);  // Replace this with actual data from Teams API
    };

    fetchCalendarEvents();
  }, []);

  // Rendering events in a table format
  const eventRows = [];
  if (events.length) {
    for (const [i, event] of events.entries()) {
      eventRows.push(
        <tr key={event.id}>
          <td>{i + 1}</td>
          <td>{event.title}</td>
          <td>{event.date}</td>
          <td>{event.time}</td>
          <td>{event.description}</td>
        </tr>
      );
    }
  } else {
    eventRows.push(
      <tr key='0'>
        <td colSpan='5'>No upcoming events</td>
      </tr>
    );
  }

  return (
    <main className='container-fluid bg-light text-center'>
      <h2 className='my-4'>**THIS IS WHERE MY 3RD PARTY SERVICE CALL WILL GO**</h2>
      <table className='table table-striped table-bordered'>
      </table>
    </main>
  );
}
