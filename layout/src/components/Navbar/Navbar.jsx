import React, { useState } from 'react';
import { NavbarData } from '../../globals/Data/navbarData'; // Assuming this is correct
import { useDispatch, useSelector } from 'react-redux';
import { AddTab, RemoveTab, ViewTab } from '../../redux/tabSlice';
import { IoMdClose } from "react-icons/io";



export const Navbar = () => {

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
  }
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
            {NavbarData.map((item, i) => (
              <React.Fragment key={i}>
              <li onClick={() => handleMenu(item)}>{item.name}</li>
              </React.Fragment>))}
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
