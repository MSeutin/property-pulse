import '@/assets/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Property Pulse',
  keywords: 'property, real estate, investment, australia',
  description: 'find the best property investment opportunities in australia',
}

const RootLayout = ({ children }) => {
  return (<html>
    <body>
        <Navbar />
      <main>
        {children} 
      </main>
      <Footer />
    </body>
  </html> );
}
 
export default RootLayout;