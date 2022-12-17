import React from "react"
import Signup from "./Signup"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import Dashboard from "./Dashboard"
import Login from "./Login"
import PrivateRoute from "./PrivateRoute"
import ForgotPassword from "./ForgotPassword"
import UpdateProfile from "./UpdateProfile"
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'C:/Users/vihe8/Grillic/src/App.css';
import Home from './pages/Home';
import Products from './pages/Products';
import SignUp from './pages/SignUp';

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
            <Switch>
              <PrivateRoute exact path="/" component={<Dashboard />} />
              <PrivateRoute exact path="/update-profile" component={<UpdateProfile/>} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login } />
              <Route path="/forgot-password" component={ForgotPassword } />
              <Route path="/" element={Home } />
              <Route path='/products' element={Products } />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
