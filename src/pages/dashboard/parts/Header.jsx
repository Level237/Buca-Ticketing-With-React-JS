import Search from "../components/Search";
import ThemeSwitcher from "../components/ThemeSwitcher";
import LanguageSwitcher from "../components/LanguageSwitcher";
import Notification from "../components/Notification";
import ProfileUser from "../components/ProfileUser";

const Header=()=>{

    return (
        <header className="container-fluid d-flex py-6 mb-4">
            <Search/>
            <div className="d-flex align-items-center ms-auto me-n1 me-lg-n2">
                <ThemeSwitcher/>
                <div className="vr bg-gray-700 mx-2 mx-lg-3"></div>
                <LanguageSwitcher/>
                <div class="vr bg-gray-700 mx-2 mx-lg-3"></div>
                <Notification/>
                <ProfileUser/>
                <div class="vr bg-gray-700 mx-2 mx-lg-3"></div>
                
            </div>
        </header>
    )
}
export default Header;