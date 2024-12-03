import React from 'react';
import { useDispatch } from 'react-redux';

import EventsList from './components/EventsList';
import Loading from './components/Loading';
import ErrorModal from './components/ErrorModal';
import { useAppSelector } from './hooks';
import { AppDispatch } from './store/store';
import { fetchWikiData } from './api/wikipedia';
import { resetError } from './store/eventsSlice';

const App: React.FC = () => {
  const { events, loading, error } = useAppSelector((state) => state.events);
  const dispatch = useDispatch<AppDispatch>();

  const handleLoadEvents = () => {
    dispatch(fetchWikiData());
  };

  const handleCloseModal = () => {
    dispatch(resetError());
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center px-4">
      <header className="w-full py-6 bg-blue-600 text-white text-center text-2xl font-bold shadow align-top">
        On This Day - Wikipedia
      </header>
      <main className="flex-grow w-full max-w-4xl mx-auto mt-6">
        {!events.length && (
          <button
            className="px-6 py-2 block mx-auto bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onClick={handleLoadEvents}
            disabled={loading}
          >
            Fetch Events
          </button>
        )}

        {loading && <Loading />}
        <EventsList />
        <ErrorModal error={error} onClose={handleCloseModal} />
      </main>

      <footer className="w-full py-4 bg-gray-800 text-white text-center text-sm">
        &copy; {new Date().getFullYear()} Wikipedia Events Viewer
      </footer>
    </div>
  );
};

export default App;
