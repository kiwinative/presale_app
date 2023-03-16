"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

interface ContextProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    infosubmenuOpen: boolean,
    setInfoSubmenuOpen: Dispatch<SetStateAction<boolean>>
    linksubmenuOpen: boolean,
    setLinkSubmenuOpen: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<ContextProps>({
    open: false,
    setOpen: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    infosubmenuOpen: false,
    setInfoSubmenuOpen: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    linksubmenuOpen: false,
    setLinkSubmenuOpen: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    }
})

export const GlobalContextProvider = ({ children }) => {
    const [open, setOpen] = useState(true)
    const [infosubmenuOpen, setInfoSubmenuOpen] = useState(true)
    const [linksubmenuOpen, setLinkSubmenuOpen] = useState(true)

    return (
        <GlobalContext.Provider value={{ open, setOpen, infosubmenuOpen, setInfoSubmenuOpen, linksubmenuOpen, setLinkSubmenuOpen }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);