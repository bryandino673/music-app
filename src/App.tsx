import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import Player from './components/Player';
import { searchSongs } from './hooks/api';

const App: React.FC = () => {
  const [currentSong, setCurrentSong] = useState('');
  const [isPlaying, setIsPlaying] = useState(false);

  const handleSearch = async (query: string) => {
    try {
      const data = await searchSongs(query);
      // Assuming the API returns a list of song objects with unique IDs
      // Update the currentSong state with the first song ID from the response
      setCurrentSong(data[0].id);
    } catch (error) {
      // Handle error
    }
  };

  const handleNext = () => {
    // Logic to play the next song
  };

  const handlePrevious = () => {
    // Logic to play the previous song
  };

  const handleTogglePlay = () => {
    setIsPlaying(!isPlaying);
    // Logic to toggle play/pause
  };

  const handleToggleShuffle = () => {
    // Logic to toggle shuffle mode
   };

  const handleToggleRepeat = () => {
    // Logic to toggle repeat mode
  };

  const handleVolumeChange = (volume: number) => {
    // Logic to handle volume change
  };

  return (
    <div className="app">
      <SearchBar onSearch={handleSearch} />
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onTogglePlay={handleTogglePlay}
        onToggleShuffle={handleToggleShuffle}
        onToggleRepeat={handleToggleRepeat}
        onVolumeChange={handleVolumeChange}
      />
    </div>
  );
};

export default App;