import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext();


const UserContextProvider = ({ children }) => {

    const [isAdmin, setAdmin] = useState(false);
    const [user, setUser] = useState(null);

    const value = {
        isAdmin: isAdmin,
        setAdmin: setAdmin,
        user: user,
        setUser: setUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
