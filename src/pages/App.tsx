import React from 'react';
import Form from '../components/Form';
import List from '../components/List';
import style from './App.module.scss';
import Clock from '../components/Timer/Clock';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <List />
      <Clock/>
    </div>
  );
}

export default App;
