import React from 'react'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import './Layout.css'
import Menus from '../Menus/Menus';

const Layout = ({ toggle, handleToggle }) => {
  return (
    <div className={`sidebar ${toggle ? 'expanded' : ''}`}>
      <div className="sidebar-toggle-icons">
        <p onClick={handleToggle}>
          {toggle ? (
            <AiOutlineDoubleLeft size={24} />
          ) : (
            <AiOutlineDoubleRight size={24} />
          )}
        </p>
      </div>
      <Menus toggle={toggle} />
    </div>
  )
}

export default Layout
