import React from "react"

export const AuthProviderContext = React.createContext()
export const AuthProviderContextDispatcher = React.createContext()

const LOCAL_STORAGE_KEY = "_auth"

const initialAuth = () =>
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || false)

function AuthProvider({ children }) {
  const [auth, setAuth] = React.useState(initialAuth)

  React.useEffect(() => {
    const data = JSON.stringify(auth)
    localStorage.setItem(LOCAL_STORAGE_KEY, data)
  }, [auth])

  return (
    <AuthProviderContext.Provider value={auth}>
      <AuthProviderContextDispatcher.Provider value={setAuth}>
        {children}
      </AuthProviderContextDispatcher.Provider>
    </AuthProviderContext.Provider>
  )
}

export default AuthProvider