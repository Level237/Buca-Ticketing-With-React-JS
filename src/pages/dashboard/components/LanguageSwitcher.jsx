const LanguageSwitcher=()=>{

    return (
        <div class="dropdown">
                        <a href="javascript: void(0);" class="dropdown-toggle no-arrow d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mx-1 mx-lg-2 w-40px h-40px" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">
                            <span class="avatar avatar-circle avatar-xxs"><img class="avatar-img" src="{{asset('assets/svg/fr.svg')}}" alt="..." width="18" height="18"/></span>
                        </a>

                        <ul class="dropdown-menu dropdown-menu-end">
                            <li>
                                <h6 class="dropdown-header text-uppercase">Selectionnez une langue</h6>
                            </li>
                            <li>
                                <a href="javascript: void(0);" class="dropdown-item active">
                                    <span class="avatar avatar-circle avatar-xxs"><img class="avatar-img" src="" alt="..." width="18" height="18" /></span><span class="text-truncate ms-2">Anglais</span>
                                </a>
                            </li>

                            <li>
                                <a href="javascript: void(0);" class="dropdown-item">
                                    <span class="avatar avatar-circle avatar-xxs"><img class="avatar-img" src="{{asset('assets/svg/fr.svg')}}" alt="..." width="18" height="18"/></span><span class="text-truncate ms-2">Français</span>
                                </a>
                            </li>


                        </ul>
                    </div>
    )
}
export default LanguageSwitcher;