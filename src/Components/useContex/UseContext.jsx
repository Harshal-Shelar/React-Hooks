import React, {createContext} from 'react';

const AppContext = createContext();

const AppProvider = ({children}) =>{
    const userData = {
        name : 'Harshal Shelar',
        email : 'harshalshelar8251@gmail.com',
        phone : '8600480438'
    };

    return <AppContext.Provider value={userData}>{children}</AppContext.Provider>
}

export default {AppProvider, AppContext}
