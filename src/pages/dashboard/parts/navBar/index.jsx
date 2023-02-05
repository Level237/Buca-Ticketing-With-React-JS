import Brand from "../../../components/Brand";
import { menuItems } from "../../../../features/dashboard/utils/menuItems";
import MenuItems from "./components/MenuItems";
const NavBar=()=>{

    return (
        <>
        <nav>
            <div className="container-fluid">
                <Brand width="19" height="25" />
            </div>
            <div className="collapse navbar-collapse" id="sidenavCollapse">
                <ul className="navbar-nav mb-lg-7">
                    
                        {menuItems.map((menu,index)=>{
                            return <MenuItems items={menu} key={index}/>
                        })}
                    
                </ul>
            </div>
        </nav>
        </>
    )
}

export default NavBar;