
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
// import { RouterProvider,createBrowserRouter } from 'react-router-dom';
// import { Outlet } from 'react-router-dom';

// const MainRouter = createBrowserRouter([
//   {path:'/',Component:Login},
//   {path:'/login',Component:Login},
//   {path:'/signup',Component:Signup},
//   {path:'/dashboard',Component:Dashboard}
// ])
function App() {
  return (
<>
{/* <RouterProvider router={MainRouter} /> */}
{/* <Login />
<Signup />
<Dashboard /> */}
<Login/>
<Dashboard/>
<Signup/>
</>
  );
}

export default App;
