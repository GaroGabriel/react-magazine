import {createContext, useState, useEffect} from "react";
import {createUserDocumentFromAuth, onAuthStateChangeListener} from "../routes/utils/firebase/firebase";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const value = {currentUser, setCurrentUser}


    useEffect(() => {
        const unsubscribe = onAuthStateChangeListener((user) => {
            if(user){
                 createUserDocumentFromAuth(user)
            }
            setCurrentUser(user)
        })
        return unsubscribe
    }, []);


    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>)
}
