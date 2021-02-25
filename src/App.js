import React, {useEffect, useState} from 'react';
import {StoriesContainer} from './containers/StoriesContainer'

export const App = () =>  (
  <div>
  <h1>Hackernews 2.0</h1>
  <div className="header">
    <span>
      <a href="#">Guidlines</a>
       |
      <a href="#">FAQ</a>
       |
      <a href="#">Lists</a>
       |
      <a href="#">API</a>
       |
      <a href="#">Security</a>
       |
      <a href="#">Legal</a>
       |
      <a href="#">Apply to YC</a>
       |
      <a href="#">Contact</a>
    </span>
    <br/>
    <br/>
    <form action="index.html" method="get">
      Search: 
      <input type="text" placeholder="type something..."/>
    </form>
  </div>
  <StoriesContainer />
  </div>)
