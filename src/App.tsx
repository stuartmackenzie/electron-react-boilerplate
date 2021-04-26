/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import './App.global.css';

const Hello = () => {
  const [version, setVersion] = useState('');
  const [info, setInfo] = useState('');

  useEffect(() => {
    ipcRenderer.on('message', (_, data) => {
      if (data.method === 'version') {
        setVersion(data.result.version);
      }

      if (data.method === 'info') {
        setInfo(data.result);
      }
    });
  }, []);

  return (
    <div>
      <div>{version}</div>
      <div>{info}</div>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Hello} />
      </Switch>
    </Router>
  );
}
