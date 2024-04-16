import React, { useState } from 'react';
import './App.css';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {
  const [events, setEvents] = useState([]);

  const addEvent = (newEvent) => {
    setEvents([...events, newEvent]);
  };

  const deleteEvent = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  return (
    <div className="App">
      <h1>Kalendář událostí</h1>
      <EventForm addEvent={addEvent} />
      <div className="event-list-con">
        <EventList events={events} deleteEvent={deleteEvent} />
      </div>
    </div>
  );
}

export default App;
