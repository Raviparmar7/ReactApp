import React, {useState} from 'react';
import "./style.css";
import Menu from '../menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';


const uniqueList = [
    ...new Set(                                        // (...) is called spread operator
        Menu.map((curElem) =>{
            return curElem.category;
        })
    ),
    "All",
];

console.log(uniqueList);


const Resturent = () => {
     const [menuData, setMenuData] = useState(Menu); // it's called hooks it is use for hold apidata
     const [menuList, setMenuList] = useState(uniqueList)

     const filterItem =(category) => {
         if(category=="All") {
             setMenuData(Menu);
             return;
         }
         const updatedList = Menu.filter((curElem) =>{
             return curElem.category === category;
         })
         setMenuData(updatedList);
     };
    return (
        
        <>
        <Navbar filterItem ={filterItem} menuList = {menuList} />
        <MenuCard menuData ={menuData} />
        </>
    );
};

export default Resturent;
