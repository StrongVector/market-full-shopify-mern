// "use client"

import './globals.css'

import NavBar from '../../Components/Utils/NavBar'
import SiteFooter from '../../Components/footer/SiteFooter'

export const metadata = {
  title: 'تنسيق : ننجو معا',
  description:'developed by hassan ',
}

export default function RootLayout({ children }) {
  return (
    
    <html dir='rtl' lang="ar" >

  
<head>


</head>


      <body>
    <NavBar/>
      <main>
      {children}
      </main>
      <div>
        <SiteFooter/>
      </div>
      </body>
    </html>
  )
}
