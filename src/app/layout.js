"use client"

import './globals.css'

import NavBar from '../../Components/Utils/NavBar'
import { Provider } from 'react-redux'
import Store from '../../redux/Store'


export const metadata = {
  title: ' Foodify',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html dir='' lang="" >

  
<head>


</head>


      <body>
        <Provider store={Store}>
    <NavBar/>
      <main>
      {children}
      </main>
      <div>
      
      </div>
      </Provider>
      </body>
    </html>
  )
}
