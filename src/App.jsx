import './App.css';
import image from './assets/huh.png';
import React from 'react';

export default function App() {
  return (
    <>
      <h1>Hell World</h1>
      <h3>and here we go</h3>
      <img src={image} height={320} width={320}></img>
    </>
  );
}
