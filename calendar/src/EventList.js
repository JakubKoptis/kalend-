import React from 'react';
import Event from './Event';

function EventList({ events, deleteEvent }) {
  return (
    <div className="event-list">
      <h2 className='Nadpis2'>UDÁLOSTI!</h2>
      {events.map((event, index) => (
        <Event key={index} event={event} index={index} deleteEvent={deleteEvent} />
      ))}
    </div>
  );
}

export default EventList;
