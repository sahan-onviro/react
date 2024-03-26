import React, { useEffect, useState } from 'react'
import { useLayoutData } from './globals/Context/Layout';
import { Navbar } from './components/Navbar/Navbar';
import Homepage from './components/homepage/Homepage';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Table from './components/table/Table';
import { compObj } from './globals/Data/compObj';
const App = () => {

  const { navbarData, setNavbarData, setSelectComp, selectComp } = useLayoutData();
  useEffect(() => {
    setSelectComp(compObj[navbarData])
  }, [navbarData])
  console.log("app ko :",navbarData);
  return (
    <>
      <Navbar />
      {selectComp}
    </>
  )
}

export default App