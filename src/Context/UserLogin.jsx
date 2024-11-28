import { createContext, useState } from "react";

export let Auth=createContext("")


function AuthProviderContext({children}) {


    const [UserIsLogin, setUserIsLogin] = useState(!!localStorage.getItem('Token'))


    return <Auth.Provider value={{UserIsLogin,setUserIsLogin}}>

      {children}

    </Auth.Provider>
}

export default AuthProviderContext;