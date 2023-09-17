import './App.css';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Porfolio';
import Contact from './Component/Contact/Contact';
import Layout from './Component/Layout/Layout';
import {RouterProvider , createBrowserRouter, createHashRouter} from 'react-router-dom';
import Notfount from './Component/Notfount/Notfount';
export const midea =[{type:'image',url:require('./Assets/images/port1.png')}]
const routers = createHashRouter([
   {path:'',element:<Layout/>,errorElement:<Notfount/>,children:[
   {index:true,element:<About/>},
   {path:'portfolio',element:<Portfolio/>},
   {path:'contact',element:<Contact/>},
   
 ]}
])
export default function App() {
return <RouterProvider router={routers}></RouterProvider>
  
}


