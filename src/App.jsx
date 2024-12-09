import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import { Landing, HomeLayout, About, Cocktail, Newsletter, Error } from './Pages';


const router = createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    errorElement:<Error/>,
    children:[
      {
        index:true,
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
