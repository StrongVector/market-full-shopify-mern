"use client";

import React from 'react'
import { Provider } from 'react-redux'
import Store from '../redux/Store';
import NavBar from './Utils/NavBar';


const App = ({children}) => {
  return (
    <Provider store={Store} >
    <NavBar/>

        {children}
    </Provider>
  )
}

export default App