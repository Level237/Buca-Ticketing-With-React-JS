import Brand from "../../../../components/Brand";
import { menuItems } from "../../../../features/dashboard/utils/menuItems";
import MenuItems from "./components/MenuItems";
const NavBar=()=>{

    return (
        
        <nav className="navbar navbar-vertical navbar-expand-lg scrollbar buca-color navbar-dark">
            <div className="container-fluid">
                <Brand width="70" height="70" />
            
            <div className="collapse navbar-collapse" id="sidenavCollapse">
                <ul className="navbar-nav mb-lg-7">
                    
                        {menuItems.map((menu,index)=>{
                            return <MenuItems items={menu} key={index}/>
                        })}
                    
                </ul>
                </div>
            </div>
        </nav>
        
    )
}

export default NavBar;