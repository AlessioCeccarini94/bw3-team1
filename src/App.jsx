import "./App.css"
import NavBar from "../src/components/NavBar"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import store from "../src/redux/store"
import {
  Home,
  Network,
  Jobs,
  Messaging,
  Notifications,
  Profile,
  Settings,
} from "../src/pages"
import "bootstrap/dist/css/bootstrap.min.css"
import ProfilePage from "./components/Profile/ProfilePage"
import HomePage from "./components/Home/HomePage"
import AddExperiences from "./components/AddExperieces"

function App() {
  return (
    <>
      {/* <NavBar/> */}
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/network" element={<Network />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<Settings />} />
            <Route
              path="/add-experiences"
              element={<AddExperiences userId={"6937db48d322f500151076a1"} />}
            />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
