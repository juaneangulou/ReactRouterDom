import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuAppBar from './MenuAppBar';
import { Route, Switch } from "react-router";
import  MyTable from './MyTable'

function Home() {
  return (
    <div>
        <h1>Hola desde home</h1>
        <p>hola mundo desde home</p>
        <input type="date" />

        <MyTable></MyTable>
    </div>
  );
}

export default Home;
