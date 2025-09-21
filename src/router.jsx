import { createBrowserRouter } from 'react-router-dom';
import AppLayout from './AppLayout';

// Pages
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Careers from './routes/Careers';
import Contact from './routes/Contact';
import NotFound from './routes/NotFound';
import Charity from './routes/Charity';
import Partners from './routes/Partners';
import Entertainment from './routes/Entertainment';



// Domain pages
import Healthcare from './routes/Healthcare';
import Hospitality from './routes/Hospitality';
import Education from './routes/Education';
import Retail from './routes/Retail';
import Finance from './routes/Finance';


import Service from './routes/Service';
import Other from './routes/Other';



// Skynet Pro page
import SkynetPro from './routes/SkynetPro'; // Make sure the path to SkynetPro is correct
import HealthCareIMS from './routes/HealthCareIMS';
import StarsIMS from './routes/StarsIMS';
import SkynetRetail from './routes/SkynetRetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'careers', element: <Careers /> },
      { path: 'more/careers', element: <Careers /> },
      { path: 'contact', element: <Contact /> },
      { path: 'more/charity', element: <Charity /> },
      { path: 'more/partners', element: <Partners /> },

      // Domain sub-routes
      { path: 'domain/healthcare', element: <Healthcare /> },
      { path: 'domain/hospitality', element: <Hospitality /> },
      { path: 'domain/education', element: <Education /> },
      { path: 'domain/retail', element: <Retail /> },
      { path: 'domain/finance', element: <Finance /> },
      { path: 'domain/entertainment', element: <Entertainment /> },


  
   
      { path: 'domain/service', element: <Service /> },
      { path: 'domain/other', element: <Other /> },

      // Skynet Pro sub-route
      { path: 'skynet-pro', element: <SkynetPro /> }, // Add this line
      { path: 'healthcare-ims', element: <HealthCareIMS /> },
      { path: 'stars-ims', element: <StarsIMS /> },
      { path: 'skynet-retail', element: <SkynetRetail /> },
    ],
  },
]);