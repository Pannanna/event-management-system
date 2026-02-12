import { Event } from "./models/event";
import { Participant } from "./models/participant";
import { Festival, Birthday } from "./models/theme";
import { EventManager } from "./services/eventManager";

const eventManager = new EventManager();

// Tematikák létrehozása
const festivalTheme = new Festival("Festival", "EDM");
const birthdayTheme = new Birthday("Birthday Party", 5);

// Rendezvények létrehozása a megfelelő tematikával
const event1: Event = {
  id: 1,
  name: "Summer Fest",
  location: "Budapest",
  dateTime: new Date("2026-07-10T18:00:00"),
  participants: [],
  theme: festivalTheme
};

const event2: Event = {
  id: 2,
  name: "Family Birthday",
  location: "Csömör",
  dateTime: new Date("2026-07-12T15:00:00"),
  participants: [],
  theme: birthdayTheme
};

// Résztvevők létrehozása
const participant1: Participant = { id: 1, name: "John Doe" };
const participant2: Participant = { id: 2, name: "Jane Doe" };

// Rendezvények hozzáadása
eventManager.addEvent(event1);
eventManager.addEvent(event2);

// Résztvevők hozzáadása
eventManager.addParticipant(participant1);
eventManager.addParticipant(participant2);

// Résztvevők regisztrálása rendezvényekre
eventManager.registerParticipantToEvent(1, 1);
eventManager.registerParticipantToEvent(2, 2);

// Regisztrált rendezvények listázása
console.log("Regisztrált rendezvények:");
eventManager.listRegisteredEvents().forEach(event =>
  console.log(`- ${event.name} (${event.location})`)
);

// Résztvevő eltávolítása egy rendezvényről
eventManager.removeParticipantFromEvent(1);
console.log("Eltávolítás után regisztrált rendezvények:");
eventManager.listRegisteredEvents().forEach(event =>
  console.log(`- ${event.name} (${event.location})`)
);

// Rendezvény keresése név alapján
console.log("Keresés 'Family' névre:");
eventManager.findEventsByName("Family").forEach(event =>
  console.log(`- ${event.name} (${event.location})`)
);

// Résztvevő adatainak lekérdezése
console.log("Résztvevő adatai (ID: 1):");
const participantDetails = eventManager.getParticipantDetails(1);
if (participantDetails) {
  console.log(`Név: ${participantDetails.name}`);
}