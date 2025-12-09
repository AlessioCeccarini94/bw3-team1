<<<<<<< Updated upstream
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {


  return (
    <>
    </>
  )
=======
import NavBar from "../src/components/NavBar"
import {  Routes, Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { 
  Home, 
  Network, 
  Jobs, 
  Messaging, 
  Notifications, 
  Profile, 
  Settings 
} from '../src/pages';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePage from "./components/Profile/ProfilePage"

function App() {
  return <>
  {/* <NavBar/> */}
  <Provider store={store}>
  <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/network" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
      
  </BrowserRouter>
       </Provider>

  </>
>>>>>>> Stashed changes
}

export default App
