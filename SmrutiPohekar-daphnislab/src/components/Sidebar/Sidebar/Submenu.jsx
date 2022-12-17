import React, { useState } from 'react';
import "./sidebar.css";
import { Sidebardata } from './Sidebardata';
import Button from './SubmenuButton';
const Submenu = ({ item }) => {

  return (

      <div className="sidebar-container">
      <div className="sidebar-col">


        <div className="sidebar-row">
        <div className="sidebar-category-title">
          <span>{item.title}</span>
        </div>
        <div className="subCategories">
          <ul>
              {}
              {}
               {item.subNav.map((i)=>{console.log("i",i);
                return <Button title={i}/>;
              })}


          </ul>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Submenu;