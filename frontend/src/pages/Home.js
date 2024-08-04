// frontend/src/pages/Home.js
import React from 'react';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import UserList from '../components/UserList';

const Home = () => {
  return (
    <div>
      <About />
      <Projects />
      <Contact />
      {/* <UserList /> */}
    </div>
  );
};

export default Home;