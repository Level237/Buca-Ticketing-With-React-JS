const DropDown=({submenus})=>{

    return (
        <div class="collapse " id="tasksCollapse">
                                <ul class="nav flex-column">
                                    {submenus.map((submenu,index)=>(
                                        <li class="nav-item" >
                                        <a href={submenu.url} key={index} class="nav-link ">
                                            <span class="text-buca-secondary">{submenu.title}</span>
                                        </a>
                                    </li>
                                    ))}
                                    
                                </ul>
        </div>
    )
}
export default DropDown;