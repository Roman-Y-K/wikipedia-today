import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IEvent } from '../dto';

const today = new Date();
const month = String(today.getMonth() + 1).padStart(2, '0');
const day = String(today.getDate()).padStart(2, '0');

const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`;

const fetchWikiData = createAsyncThunk(
  'events/fetchEvents',
  async (): Promise<IEvent[]> => {
    const response = await axios.get(url);
    const data = response.data.events;

    return data.sort((a: IEvent, b: IEvent) => b.year - a.year);
  }
);

export { fetchWikiData };
