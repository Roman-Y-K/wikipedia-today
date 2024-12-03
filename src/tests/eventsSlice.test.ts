import reducer, { EventsState, resetError } from '../store/eventsSlice';
import { fetchWikiData } from '../api/wikipedia';

describe('Action Creator Tests', () => {
  it('should create an action to reset error', () => {
    const expectedAction = {
      type: 'events/resetError',
    };
    expect(resetError()).toEqual(expectedAction);
  });
});

describe('Reducer Tests', () => {
  const initialState: EventsState = {
    events: [],
    loading: false,
    error: null,
  };

  it('should handle resetError', () => {
    const stateWithError: EventsState = {
      ...initialState,
      error: 'Some error',
    };
    const newState = reducer(stateWithError, resetError());
    expect(newState.error).toBeNull();
  });

  it('should handle fetchWikiData.pending', () => {
    const newState = reducer(initialState, fetchWikiData.pending(''));
    expect(newState.loading).toBe(true);
    expect(newState.error).toBeNull();
  });

  it('should handle fetchWikiData.fulfilled', () => {
    const events = [{ year: 1934, text: 'Test text', pages: [] }];
    const newState = reducer(initialState, fetchWikiData.fulfilled(events, ''));
    expect(newState.loading).toBe(false);
    expect(newState.events).toEqual(events);
  });
});
