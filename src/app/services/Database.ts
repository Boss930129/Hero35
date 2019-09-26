import firebase from "firebase/app";
import "firebase/auth";
import { Event, EventEdition, Talk } from "../schema";
import fetch from "isomorphic-unfetch";

// Use Firebase internal network address for SSR
const API =
  typeof window !== "undefined"
    ? "https://hero35.com/api/"
    : "https://heroes-9c313.web.app/api/";

const config = {
  apiKey: process.env.API_KEY || "AIzaSyCDkhN8TpWw5-5Ukn4cfPXI8ufjAxelcDA",
  authDomain: "heroes-9c313.firebaseapp.com",
  databaseURL: "https://heroes-9c313.firebaseio.com",
  projectId: "heroes-9c313",
  storageBucket: "heroes-9c313.appspot.com"
};

class Database {
  auth: firebase.auth.Auth;
  app: firebase.app.App;

  constructor() {
    if (!firebase.apps.length) {
      this.app = firebase.initializeApp(config);
    }

    this.auth = firebase.auth(firebase.app());
  }

  // Content API ---------------------------------------------------------------

  getEvent = async (eventId: string): Promise<Event> => {
    const res = await fetch(`${API}event?id=${eventId}`);
    return ((await res.json()) as unknown) as Event;
  };

  getEdition = async (
    eventId: string,
    editionId: string
  ): Promise<EventEdition> => {
    const res = await fetch(
      `${API}edition?eventId=${eventId}&editionId=${editionId}`
    );
    return ((await res.json()) as unknown) as EventEdition;
  };

  getEditionsByCountry = async (country: string): Promise<EventEdition[]> => {
    const res = await fetch(`${API}editionsByCountry?id=${country}`);
    return ((await res.json()) as unknown) as EventEdition[];
  };

  getRecentEditions = async (): Promise<EventEdition[]> => {
    const res = await fetch(`${API}recentEditions`);
    return ((await res.json()) as unknown) as EventEdition[];
  };

  getUpcomingEditions = async (): Promise<EventEdition[]> => {
    const res = await fetch(`${API}upcomingEditions`);
    return ((await res.json()) as unknown) as EventEdition[];
  };

  getTalk = async (
    eventId: string,
    editionId: string,
    talkId: string
  ): Promise<Talk> => {
    const res = await fetch(
      `${API}talk?eventId=${eventId}&editionId=${editionId}&talkId=${talkId}`
    );
    return ((await res.json()) as unknown) as Talk;
  };

  getRecentTalks = async (): Promise<Talk[]> => {
    const res = await fetch(`${API}recentTalks`);
    return ((await res.json()) as unknown) as Talk[];
  };

  getCuratedTalks = async (): Promise<Talk[]> => {
    const res = await fetch(`${API}curatedTalks`);
    return ((await res.json()) as unknown) as Talk[];
  };

  getTalksByTopic = async (topic: string): Promise<Talk[]> => {
    const res = await fetch(`${API}talksByTopic?id=${topic}`);
    return ((await res.json()) as unknown) as Talk[];
  };
}

export default new Database();
