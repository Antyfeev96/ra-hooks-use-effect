import { useState, useEffect } from 'react';
import './App.scss';
import Details from './Components/Details/Details';
import List from './Components/List/List';

export default function App() {
  const [details, setDetails] = useState({
    id: null,
    name: 'name',
    avatar: 'https://i.pravatar.cc/300',
    details: {
      city: 'city',
      company: 'company',
      position: 'position'
    }
  })

  const changeUser = async (newUser) => {
    if (details.id === newUser.id)  return;
    try {
      const response = await fetch(`${process.env.REACT_APP_NEWS_URL}/${newUser.id}.json`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const result = await response.json();
      console.log('Details получены');
      setDetails(result);       
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="app">
      <List changeUser={changeUser} />
      <Details {...details} />
    </div>
  );
}