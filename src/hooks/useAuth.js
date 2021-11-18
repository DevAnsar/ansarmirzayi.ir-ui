import React from "react"
import { AuthProviderContext } from "./../providers/AuthProvider"

function useAuth() {
  return React.useContext(AuthProviderContext)
}

export default useAuth