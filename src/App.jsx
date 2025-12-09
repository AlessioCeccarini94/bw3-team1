import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Experiences from "./components/Experiences"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import ProfileInfo from "./components/ProfileInfo"

function App() {
  return (
    <>
      <Provider store={store}>
        <ProfileInfo />
        <Experiences userId="6297db48d322f500115176a1" />
      </Provider>
    </>
  )
}

export default App
