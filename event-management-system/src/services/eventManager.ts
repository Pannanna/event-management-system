import { Event } from "../models/event";
import { Participant } from "../models/participant";
import { isEvent, isParticipant } from "../utils/typeGuards";
import { RegistrationManager } from "./registrationManager";

export class EventManager {
  private events: Map<number, Event> = new Map();
  private participants: Map<number, Participant> = new Map();
  private registrations: RegistrationManager<Event> = new RegistrationManager<Event>();

  addEvent(event: Event): void {
    this.events.set(event.id, event);
  }

  addParticipant(participant: Participant): void {
    this.participants.set(participant.id, participant);
  }

  removeEvent(eventId: number): void {
    this.events.delete(eventId);
    this.registrations.removeItem(eventId); 
  }

  listEvents(): Event[] {
    return Array.from(this.events.values());
  }

  registerParticipantToEvent(eventId: number, participantId: number): void {
    const event = this.events.get(eventId);
    const participant = this.participants.get(participantId);

    if (
      isEvent(event) &&
      isParticipant(participant) &&
      !this.registrations.listItem().find(e => e.id === eventId)
    ) {
      this.registrations.addItem(event);
      console.log(`Participant ${participant.name} registered to event ${event.name}`);
    } else {
      console.log(
        `Cannot register participant: ${
          event ? event.name : "Event not found"
        } or already registered`
      );
    }
  }

  removeParticipantFromEvent(eventId: number): void {
    if (this.registrations.listItem().find(e => e.id === eventId)) {
      this.registrations.removeItem(eventId);
      console.log(`Participant removed from event`);
    } else {
      console.log("Event was not registered or does not exist");
    }
  }

  listRegisteredEvents(): Event[] {
    return this.registrations.listItem();
  }

  findEventsByName(name: string): Event[] {
    return Array.from(this.events.values()).filter(event =>
      event.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  getParticipantDetails(participantId: number): Participant | undefined {
    return this.participants.get(participantId);
  }
}