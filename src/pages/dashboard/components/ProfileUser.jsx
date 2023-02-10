import buca from "../../../assets/images/buca.jpg";
const ProfileUser=()=>{

    return (
        <div>
                        <a href="javascript: void(0);" class="dropdown-toggle no-arrow d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mx-1 mx-lg-2 w-40px h-40px" role="button" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">
                            <div class="avatar avatar-circle avatar-sm avatar-online">
                                <img src={buca} alt="..." class="avatar-img" width="40" height="40"/>
                            </div>
                        </a>

                        <div class="dropdown-menu">
                            <div class="dropdown-item-text">
                                <div class="d-flex align-items-center">
                                    <div class="avatar avatar-sm avatar-circle">
                                        <img src="{{asset('assets/img/buca.jpg')}}" alt="..." class="avatar-img" width="40" height="40"/>
                                    </div>
                                    <div class="flex-grow-1 ms-3">
                                        <h4 class="mb-0">Buca Voyage Douala</h4>
                                        <p class="card-text">Mballa Etienne</p>
                                    </div>
                                </div>
                            </div>

                            <hr class="dropdown-divider"/>



                            <a class="dropdown-item" href="javascript: void(0);">Profil et Compte</a>
                            <a class="dropdown-item" href="javascript: void(0);">Paramètres</a>

                            <hr class="dropdown-divider"/>

                            <a class="dropdown-item" href="javascript: void(0);">Deconnexion</a>
                        </div>
                    </div>
    )
}
export default ProfileUser;