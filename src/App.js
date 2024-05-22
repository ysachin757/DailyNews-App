import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscomp from './components/Newscomp';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Navbar/>
          <Routes> 
          <Route exact path="/" element={<Newscomp key="sports" pageSize={4} country="in" category="sports"/>}></Route>
         <Route exact path="/business" element={<Newscomp key="business" pageSize={4} country="in" category="business"/>}></Route>
         
         <Route exact path="/entertainment"element={<Newscomp key="entertainment" pageSize={4} country="in" category="entertainment"/>}></Route>
         
         <Route exact path="/health"element={<Newscomp key="health" pageSize={4} country="in" category="health"/>}></Route>
         <Route exact path="/science"element={<Newscomp key="science" pageSize={4} country="in" category="science"/>}></Route>
         <Route exact path="/sports"element={<Newscomp key="sports" pageSize={4} country="in" category="sports"/>}></Route>
         <Route exact path="/technology"element={<Newscomp key="technology" pageSize={4} country="in" category="technology"/>}></Route>
      </Routes>
      </BrowserRouter>
      </div>
    )
  }
}

