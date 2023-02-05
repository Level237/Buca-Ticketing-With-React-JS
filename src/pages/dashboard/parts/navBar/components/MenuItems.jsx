import DropDown from "./DropDown";
const MenuItems=()=>{

    return (
        <li className="nav-item dropdown">
                {items.submenu ? (
                    <>
                    <a class="nav-link active" href={menu.url}>
                                    {menu.svg}
                                    <span class="text-buca-secondary -bottom-3">{menu.title}</span>
                                </a>
                                <DropDown submenus={items.submenu}/>
                    </>
                ):(
                    <a class="nav-link active" href={menu.url}>
                                    {menu.svg}
                                    <span class="text-buca-secondary -bottom-3">{menu.title}</span>
                                </a>
                )}
                                    
        </li>
    )
}

export default MenuItems;