
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import AppRoutes from "./routes/AppRoutes"
import {BrowserRouter as Router} from 'react-router-dom'

import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/ReactToastify.css';

const App = () => {
  return (
    <>
    <ToastContainer/>
    <Router>
        <NavBar/>
        <AppRoutes/>
        <Footer/>
    </Router>

    </>

  )
}

export default App