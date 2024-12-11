import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Landing, HomeLayout, About, Cocktail, Newsletter, Error } from './Pages';
import { loader as landingLoader } from './Pages/Landing';


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        loader:landingLoader,
        element: <Landing/>,
      },
      {
        path:'cocktail',
        element: <Cocktail/>,
      },
      {
        path:'newsletter',
        element: <Newsletter/>,
      },
      {
        path:'about',
        element: <About/>,
      }
    ]
  },
])

const App = () => {
  return <RouterProvider router = {router} />;
};
export default App;
