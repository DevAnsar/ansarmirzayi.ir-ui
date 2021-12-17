import React from "react"
import { Route } from "react-router-dom"
import useAuth from "./../hooks/useAuth"

function PrivateRoute(props) {
  const loggedIn = useAuth();
  // const navigation=useNavigate();
  return loggedIn ? <Route {...props} /> : <Route {...props} />
}

export default PrivateRoute