import React from 'react';

function Event({ event, index, deleteEvent }) {
  return (
    <div className="event">
      <h3>{event.title}</h3>
      <p>Den: {event.date}</p>
      <p>Čas: {event.time}</p>
      <p>Popisek: {event.description}</p>
      <button onClick={() => deleteEvent(index)}>Smazat</button>
    </div>
  );
}

export default Event;
