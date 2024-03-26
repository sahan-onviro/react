import { createContext, useContext, useState } from "react";
import { Navbar } from "../../components/Navbar/Navbar";

const LayoutData = createContext();
export const Layout = ({ children }) => {
    const [navbarData, setNavbarData] = useState([]);
    const [contactData, setContactData] = useState([]);
    const [selectComp, setSelectComp] = useState(null);

    const [getId, setId] = useState();

    return (
        <LayoutData.Provider value={{ navbarData, setNavbarData, contactData, setContactData, getId, setId, selectComp, setSelectComp }}>

            {children}
        </LayoutData.Provider>
    )
}
export const useLayoutData = () => useContext(LayoutData);