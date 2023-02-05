import Brand from "../../../components/Brand";
import { MenuItems } from "../../../../features/dashboard/utils/MenuItems";
const NavBar=()=>{

    return (
        <>
        <nav>
            <div className="container-fluid">
                <Brand width="19" height="25" />
            </div>
            <div className="collapse navbar-collapse" id="sidenavCollapse">
                <ul className="navbar-nav mb-lg-7">
                    
                        {MenuItems.map((menu)=>{
                            return (
                                <li className="nav-item dropdown">
                                    <a class="nav-link active " href={menu.url}>
                                <svg viewbox="0 0 24 24" class="nav-link-icon text-buca-secondary" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3.753,13.944v8.25h6v-6a1.5,1.5,0,0,1,1.5-1.5h1.5a1.5,1.5,0,0,1,1.5,1.5v6h6v-8.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M.753,12.444,10.942,2.255a1.5,1.5,0,0,1,2.122,0L23.253,12.444" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                                <span class="text-buca-secondary -bottom-3">{menu.title}</span>
                            </a>
                                </li>
                            )
                        })}
                    
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;