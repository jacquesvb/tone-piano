import { useState, useEffect, useCallback } from 'react';
import * as Tone from 'tone';
import './App.css';

const play = (note: any) => {
  const piano = new Tone.Sampler({
    urls: {
      C4: 'C4.mp3',
      "D#4": "Ds4.mp3",
      "F#4": "Fs4.mp3",
      A4: "A4.mp3",
    },
    release: 1,
    baseUrl: "https://tonejs.github.io/audio/salamander/",
  }).toDestination();
  Tone.loaded().then(() => {
    piano.triggerAttackRelease(`${note}`, 4);
  });
  console.log(note);
};

function App() {
  const [keyPressed, setKeyPressed] = useState('');
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const { key } = e;
    setKeyPressed(key);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  switch (keyPressed) {
    case 'a':
      play('C4');
      setKeyPressed('');
      break;
    case 'w':
      play('Db4');
      setKeyPressed('');
      break;
    case 's':
      play('D4');
      setKeyPressed('');
      break;
    case 'e':
      play('Eb4');
      setKeyPressed('');
      break;
    case 'd':
      play('E4');
      setKeyPressed('');
      break;
    case 'f':
      play('F4');
      setKeyPressed('');
      break;
    case 't':
      play('Gb4');
      setKeyPressed('');
      break;
    case 'g':
      play('G4');
      setKeyPressed('');
      break;
    case 'y':
      play('Ab4');
      setKeyPressed('');
      break;
    case 'h':
      play('A4');
      setKeyPressed('');
      break;
    case 'u':
      play('Bb4');
      setKeyPressed('');
      break;
    case 'j':
      play('B4');
      setKeyPressed('');
      break;
    case 'k':
      play('C5');
      setKeyPressed('');
      break;
    default:
      break;
  }
  
  return (
    <div className="pianoPage">
      <h1>Piano</h1>
      <div className="piano">
        <div className="white-key" onClick={() => play('C4')}>A</div>
        <div className="black-key" onClick={() => play('Db4')}>W</div>
        <div className="white-key" onClick={() => play('D4')}>S</div>
        <div className="black-key" onClick={() => play('Eb4')}>E</div>
        <div className="white-key" onClick={() => play('E4')}>D</div>
        <div className="white-key" onClick={() => play('F4')}>F</div>
        <div className="black-key" onClick={() => play('Gb4')}>T</div>
        <div className="white-key" onClick={() => play('G4')}>G</div>
        <div className="black-key" onClick={() => play('Ab4')}>Y</div>
        <div className="white-key" onClick={() => play('A4')}>H</div>
        <div className="black-key" onClick={() => play('Bb4')}>U</div>
        <div className="white-key" onClick={() => play('B4')}>J</div>
        <div className="white-key" onClick={() => play('C5')}>K</div>
      </div>
    </div>
  )
}

export default App
