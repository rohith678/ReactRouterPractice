import { createBrowserRouter,RouterProvider} from 'react-router-dom';

import EditEventPage from './pages/EditEventPage';
import EventDetailPage from './pages/EventDetailPage';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import EventRootLayout from './pages/EventRootLayout';
import ErrorPage from './pages/ErrorPage';
import { loader as singleEventLoader} from './pages/EventDetailPage';
import {loader as allEventsLoader} from './pages/EventsPage';
import{action as dataSubmitter} from './pages/NewEventPage';

import MainNavigation from './components/MainNavigation';

const router = createBrowserRouter([
  {
    path:"/",
    element:<MainNavigation/>,
    errorElement:<ErrorPage/>,
    children:[
      {index:true,element:<HomePage/>},
      {path:"/events", element:<EventRootLayout/>, 
        children:[
          {index:true,element:<EventsPage/>, loader:allEventsLoader},
          {path:"/events/new",element:<NewEventPage/>,action:dataSubmitter },
          {path:"/events/:eventID",element:<EventDetailPage/> , loader:singleEventLoader},
          {path:"/events/:eventID/edit",element:<EditEventPage/>, loader: singleEventLoader}
      ]},
    ]
  }
  
]);

function App() {

  

  return  <RouterProvider router={router}/>
}

export default App;
