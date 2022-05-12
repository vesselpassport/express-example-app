import React, { FC, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { User } from 'types/user';
import { VesselUser } from './components/VesselUser';

const Content: FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_DOMAIN}/api/authenticate`)
      .then((res) => setUser(res.data))
      .catch(() => setUser(null));
  }, []);

  if (user) {
    return <VesselUser user={user} />;
  }

  return null;
};

const App: FC = () => (
  <div className="App">
    <Content />
  </div>
);

export default App;
