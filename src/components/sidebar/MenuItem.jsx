import React, { useState } from "react";
import "./MenuItem.css";
import { UilEstate, UilChart, UilClipboardAlt,UilUsersAlt,
UilPackage,UilSignOutAlt } from "@iconscout/react-unicons";

const MenuItem = () => {
  const [select,setSelect]=useState(0)
  
  const handleMenuItemClick = (index) => {
    setSelect(index);
  };
  return (
    <div className="menu ">
      <div className={select === 0 ?'menuItem active':'menuItem'} onClick={()=>handleMenuItemClick(0)}>
        <div>
          <UilEstate />
        </div>
        <span>Dashboard</span>
      </div>

      <div className={select === 1 ?'menuItem active':'menuItem'} onClick={()=>handleMenuItemClick(1)}>
        <div><UilClipboardAlt/></div>
        <span>Orders</span>
      </div>
      <div className={select === 2 ?'menuItem active':'menuItem'} onClick={()=>handleMenuItemClick(2)}>
        <div><UilUsersAlt/></div>
        <span>Customers</span>
      </div>
      <div className={select === 3 ?'menuItem active':'menuItem'} onClick={()=>handleMenuItemClick(3)}>
        <div><UilPackage/></div>
        <span>Product</span>
      </div>
      <div className={select === 4 ?'menuItem active':'menuItem'} onClick={()=>handleMenuItemClick(4)}>
        <div><UilChart/></div>
        <span>Analytics</span>
      </div>

      <div className="menuItems ">
        <div><UilSignOutAlt/></div>
        
      </div>
    </div>
  );
};

export default MenuItem;
