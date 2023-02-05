import DropDown from "./DropDown";
const MenuItems=({items})=>{

    return (
        
        <li className="nav-item dropdown">
                {items.submenu ? (
                    <>
                    <a className="nav-link" href='#tasksCollapse' data-bs-toggle="collapse" role="button" aria-expanded="false" aria-controls="pagesCollapse">
                                    
                                    <span class="text-buca-secondary -bottom-3">{items.title}</span>
                                </a>
                                <DropDown submenus={items.submenu}/>
                    </>
                ):(
                    <a className="nav-link" href={items.url}>
                                    
                                    <span class="text-buca-secondary -bottom-3">{items.title}</span>
                                </a>
                )}
                                    
        </li>
    )
}

export default MenuItems;