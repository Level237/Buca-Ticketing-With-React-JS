import DropDown from "./DropDown";
import { Collapse } from "react-collapse";
import { useState } from "react";
const MenuItems=({items})=>{

    const [open,setOpen]=useState(false);
    const handleOpen=()=>{
        setOpen(!open);
    }
    return (
        
        <li className="nav-item">
                {items.submenu ? (
                    <>
                    <a className="nav-link" onClick={handleOpen} data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="pagesCollapse">
                                    
                                    <span className="text-buca-secondary -bottom-3">{items.title}</span>
                                </a>
                                {open ? <DropDown submenus={items.submenu}/> : null}
                                
                    </>
                ):(
                    <a className="nav-link" href={items.url}>
                                    
                                    <span className="text-buca-secondary -bottom-3">{items.title}</span>
                                </a>
                )}
                                    
        </li>
    )
}

export default MenuItems;