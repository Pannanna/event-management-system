import { Event } from './models/event';
import { Theme } from './models/theme';
import { EventManager } from './services/eventManager';

describe('EventManager', () => {
  let eventManager: EventManager;
  
  beforeEach(() => {
    eventManager = new EventManager();
    // Itt hozzáadhatjuk a tesztelni kívánt rendezvényeket, résztvevőket stb.
  });

  test('addEvent should add an event to the system', () => {
    const event: Event = {
      id: 1,
      name: 'Test Event',
      location: 'Test Location',
      dateTime: new Date(),
      participants: [],
      theme: new Theme('Test Theme')
    };

    eventManager.addEvent(event);
    const events = eventManager.listEvents();
    expect(events).toContain(event);
  });
});