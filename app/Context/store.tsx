"use client";

import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react"

interface ContextProps {
    open: boolean,
    setOpen: Dispatch<SetStateAction<boolean>>
    infosubmenuOpen: boolean,
    setInfoSubmenuOpen: Dispatch<SetStateAction<boolean>>
    linksubmenuOpen: boolean,
    setLinkSubmenuOpen: Dispatch<SetStateAction<boolean>>
    faq1Open: boolean,
    setFaq1Open: Dispatch<SetStateAction<boolean>>
    active: boolean,
    setActive: Dispatch<SetStateAction<boolean>>
    isPresale: boolean,
    setIsPresale: Dispatch<SetStateAction<boolean>>
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
    },
    faq1Open: false,
    setFaq1Open: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    active: false,
    setActive: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    },
    isPresale: false,
    setIsPresale: function (value: SetStateAction<boolean>): void {
        throw new Error("Function not implemented.");
    }
})

export const GlobalContextProvider = ({ children }) => {
    const [open, setOpen] = useState(true)
    const [infosubmenuOpen, setInfoSubmenuOpen] = useState(true)
    const [linksubmenuOpen, setLinkSubmenuOpen] = useState(true)
    const [faq1Open, setFaq1Open] = useState(true)
    const [active, setActive] = useState(true)
    const [isPresale, setIsPresale] = useState(true)

    return (
        <ThirdwebProvider activeChain={ChainId.BinanceSmartChainMainnet} dAppMeta={{
            name: "KiwiNative",
            description: "Kiwinative is a web3 based project that focuses on enhancing peer to peer transactions and improves usability and profitability.",
            logoUrl: "https://kiwinative.pro/logo.png",
            url: "https://kiwinative.pro",
          }}>
        <GlobalContext.Provider value={{ open, setOpen, infosubmenuOpen, setInfoSubmenuOpen, linksubmenuOpen, setLinkSubmenuOpen, faq1Open, setFaq1Open, active, setActive, isPresale, setIsPresale}}>
            {children}
        </GlobalContext.Provider>
        </ThirdwebProvider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);