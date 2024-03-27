import React, { useEffect } from 'react'
import { useLayoutData } from './globals/Context/Layout';
import { Navbar } from './components/Navbar/Navbar';
import { compObj } from './globals/Data/compObj';
import { useSelector } from 'react-redux';
const App = () => {

  const { setSelectComp, selectComp } = useLayoutData();
  const menuSelector = useSelector((state) => state.tabmenu.component)
  useEffect(() => {
    setSelectComp(compObj[menuSelector])
  }, [menuSelector, setSelectComp])
  return (
    <>
      <Navbar />
      {selectComp}
    </>
  )
}

export default App