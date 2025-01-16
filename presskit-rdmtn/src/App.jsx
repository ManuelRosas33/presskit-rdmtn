import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import SocialLinks from './components/SocialLinks';
import MusicProfiles from './components/MusicProfiles';
import Footer from './components/Footer';
import Media from './components/Media';

import './App.css'

function App  () {
  return (
    <div>
      <Header />
      <Bio />
      <MusicProfiles />
      <Media />
      <SocialLinks />
      <Footer />
    </div>
  );
};

export default App;       