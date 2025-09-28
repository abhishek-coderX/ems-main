import React, { createContext, useEffect, useState } from 'react'
import { initializeLocalStorage, getLocalStorage, updateEmployeesInLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        initializeLocalStorage();
        const { employees } = getLocalStorage();
        return employees;
    });

    useEffect(() => {
        updateEmployeesInLocalStorage(userData);
    }, [userData]);
    
    return (
        <div>
            <AuthContext.Provider value={[userData,setUserData]}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

export default AuthProvider