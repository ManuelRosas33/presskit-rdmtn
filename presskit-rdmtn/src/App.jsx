import React from 'react';
import Header from './components/Header';
import Bio from './components/Bio';
import SocialLinks from './components/SocialLinks';
import MusicProfiles from './components/MusicProfiles';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <SocialLinks />
      <MusicProfiles />
      <Footer />
    </div>
  );
};

export default App;