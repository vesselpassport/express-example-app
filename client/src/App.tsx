import React, { FC, useEffect, useState } from 'react';
import './styles/globals.css';
import './styles/App.css';
import axios, { AxiosError } from 'axios';
import { User } from 'types/user';
import { VesselUser } from './components/VesselUser';
import { ConnectToVessel } from './components/ConnectToVessel';
import { InstallVessel } from './components/InstallVessel';
import { Spinner } from './components/Spinner';

const Content: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [hasVessel, setHasVessel] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .post(`/api/authenticate`)
      .then((res) => setUser(res.data))
      .catch((error: AxiosError) => setHasVessel(error.response?.status === 403))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (user) {
    return <VesselUser user={user} />;
  }

  if (hasVessel) {
    return <ConnectToVessel />;
  }

  return <InstallVessel />
};

const App: FC = () => (
  <div className="root">
    <div className="content-container">
      <Content />
    </div>
  </div>
);

export default App;
