import React, { useEffect } from 'react';
import Navbar from './Navbar/Navbar';
import Jumbotron from '../../components/Home/Jumbotron/Jumbotron';
import agent from '../api/agent';

function App() {

  useEffect(() => {
    agent.Products.list().then(response => {
      console.log(response);
    })
  }, [])


  return (
    <>
      <Navbar />
      <Jumbotron />
    </>
  );
}

export default App;
