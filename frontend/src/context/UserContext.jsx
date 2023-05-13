import React, { createContext, useEffect, useState } from 'react'

const UserContext = createContext();


const UserContextProvider = ({ children }) => {

    const [isAdmin, setAdmin] = useState(false);
    const [user, setUser] = useState(null);
    const [adminUser, setAdminUser] = useState(null);
    const [adminActivePage, setAdminActivePage] = useState(0);


    const value = {
        isAdmin: isAdmin,
        setAdmin: setAdmin,
        user: user,
        setUser: setUser,
        adminActivePage,
        setAdminActivePage,
        adminUser,
        setAdminUser
    };

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider }
