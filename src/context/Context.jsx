import { createContext, useState } from "react";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {

const [data, setData] = useState("hello");


    return (
    <AppContext.Provider
    value={{
        data,
    }}
    >
    {children}
    </AppContext.Provider>
    );
};