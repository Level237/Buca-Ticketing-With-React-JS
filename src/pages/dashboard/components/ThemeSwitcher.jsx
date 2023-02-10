import { BsMoonStarsFill} from 'react-icons/bs';
const ThemeSwitcher=()=>{

    return (
        <div  id="themeSwitcher">
                        <a href="javascript: void(0);" className="dropdown-toggle no-arrow d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mx-1 mx-lg-2 w-40px h-40px link-secondary" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">
                            <BsMoonStarsFill/>
                        </a>

                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <button type="button" className="dropdown-item active" data-theme-value="light">
                              
                                    Mode Clair
                                </button>
                            </li>
                            <li>
                                <button type="button" className="dropdown-item" data-theme-value="dark">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 24 24" className="me-2" height="18" width="18"><path d="M19.57,23.34a1,1,0,0,0,0-1.9,9.94,9.94,0,0,1,0-18.88,1,1,0,0,0,.68-.94,1,1,0,0,0-.68-.95A11.58,11.58,0,0,0,8.88,2.18,12.33,12.33,0,0,0,3.75,12a12.31,12.31,0,0,0,5.11,9.79A11.49,11.49,0,0,0,15.61,24,12.55,12.55,0,0,0,19.57,23.34ZM10,20.17A10.29,10.29,0,0,1,5.75,12a10.32,10.32,0,0,1,4.3-8.19A9.34,9.34,0,0,1,15.59,2a.17.17,0,0,1,.17.13.18.18,0,0,1-.07.2,11.94,11.94,0,0,0-.18,19.21.25.25,0,0,1-.16.45A9.5,9.5,0,0,1,10,20.17Z" style={{ fill: `currentColor` }}></path></svg>
                                    Mode Sombre
                                </button>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
    )
}

export default ThemeSwitcher;