// "use client"

import './globals.css'

import NavBar from '../../Components/Utils/NavBar'


import Footer from '../../Components/Utils/Footer'
import App from '../../Components/App'


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
       

      <main>
      <App children={children} />
      </main>
      <div>
      <Footer/>
      </div>
 
      </body>
    </html>
  )
}
