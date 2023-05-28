"use client"
import { Provider } from 'react-redux'

import './globals.css'
import Store from '@/redux/Store'
import NavBar from '../../Components/NavBar'



export const metadata = {
  title: 'modern markit',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="ar" >

  
<head>


</head>
<Provider store={Store}>

      <body>
    <NavBar/>
  
      <main>
      {children}
      </main>

      </body>
      </Provider>

    </html>
  )
}
