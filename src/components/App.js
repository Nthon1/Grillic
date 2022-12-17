import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Navbar />
            <Routes>
              <PrivateRoute exact path="/" component={<Dashboard />} />
              <PrivateRoute exact path="/update-profile" component={<UpdateProfile/>} />
              <Route exact path="/signup" component={<Signup />} />
              <Route exact path="/login" component={<Login />} />
              <Route exact path="/forgot-password" component={<ForgotPassword />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path='/products' element={<Products />} />
              <Route exact path='/signup' element={<SignUp />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
