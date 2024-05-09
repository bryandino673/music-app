import React from 'react';
import { FiPlay, FiPause, FiSkipForward, FiSkipBack, FiShuffle, FiRepeat, FiVolume2 } from 'react-icons/fi';

interface PlayerProps {
  currentSong: string;
  isPlaying: boolean;
  onNext: () => void;
  onPrevious: () => void;
  onTogglePlay: () => void;
  onToggleShuffle: () => void;
  onToggleRepeat: () => void;
  onVolumeChange: (volume: number) => void;
}

const Player: React.FC<PlayerProps> = ({
  currentSong,
  isPlaying,
  onNext,
  onPrevious,
  onTogglePlay,
  onToggleShuffle,
  onToggleRepeat,
  onVolumeChange,
}) => {
  return (
    <div className="player">
      <img src={`path/to/images/${currentSong}.jpg`} alt="Album Cover" />
      <div className="controls">
        <button onClick={onPrevious}><FiSkipBack /></button>
        <button onClick={onTogglePlay}>{isPlaying ? <FiPause /> : <FiPlay />}</button>
        <button onClick={onNext}><FiSkipForward /></button>
        <button onClick={onToggleShuffle}><FiShuffle /></button>
        <button onClick={onToggleRepeat}><FiRepeat /></button>
        <div className="volume">
          <FiVolume2 />
          <input type="range" min={0} max={100} defaultValue={50} onChange={(e) => onVolumeChange(+e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Player;