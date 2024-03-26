import React, { useEffect, useId, useState } from 'react';
import { useLayoutData } from '../../globals/Context/Layout';
import { NavbarData } from '../../globals/Data/navbarData'; // Assuming this is correct
import { useDispatch, useSelector } from 'react-redux';
import { AddTab, RemoveTab, ViewTab } from '../../redux/tabSlice';
import { IoMdClose } from "react-icons/io";



export const Navbar = () => {
  const { navbarData, setNavbarData, setSelectComp, selectComp } = useLayoutData();

  const dispatch = useDispatch();
  const tabSelector = useSelector((state => state.tabmenu))

  const [lastID, setLastID] = useState(0);
  const generateID = () => {
    const newID = lastID + 1;
    setLastID(newID);
  };

  const handleMenu = (title) => {
    generateID()
    dispatch(AddTab({ name: title.slug, id: lastID }))
    setNavbarData(title.slug)
  }
  useEffect(() => {
    console.log(tabSelector.component)
    setNavbarData(tabSelector.component);
  }, [tabSelector.component]);

  const handleCloseBtn = (item) => {
    dispatch(RemoveTab(item));
  }
  const handleMenuContent = (item) => {
    dispatch(ViewTab(item))
  };

  return (
    <>
      <header>
        <nav>
          <ul>
            {NavbarData.map((item, index) => (
              <li key={index} onClick={() => handleMenu(item)}>{item.name}</li>
            ))}
          </ul>
        </nav>
      </header>
      <div>
        {tabSelector?.title?.map((item, index) => (
          <>
            <button key={index} onClick={() => handleMenuContent(item)}>{item.name}
              <span onClick={(e) => { e.stopPropagation(); handleCloseBtn(index); }}><IoMdClose /></span>
            </button>
          </>
        ))}
      </div>
    </>
  )
}
