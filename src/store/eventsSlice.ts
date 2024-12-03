import { createSlice } from '@reduxjs/toolkit';

import { IEvent } from '../dto';
import { fetchWikiData } from '../api/wikipedia';

export interface EventsState {
  events: IEvent[];
  loading: boolean;
  error: string | null;
}

const initialState: EventsState = {
  events: [],
  loading: false,
  error: null,
};

const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
    resetError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWikiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWikiData.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchWikiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch data';
      });
  },
});

export const { resetError } = eventsSlice.actions;

export default eventsSlice.reducer;
