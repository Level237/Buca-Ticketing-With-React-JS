import { GrNotification} from 'react-icons/gr';
const Notification=()=>{
    return (
        <>
        <a class="d-flex align-items-center justify-content-center bg-white rounded-circle shadow-sm mx-1 mx-lg-2 w-40px h-40px position-relative link-secondary" data-bs-toggle="offcanvas" href="#offcanvasNotifications" role="button" aria-controls="offcanvasNotifications">
                       <GrNotification/>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill text-bg-danger">
                            2<span class="visually-hidden">Messages non lues</span>
                        </span>
                    </a>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNotifications" aria-labelledby="offcanvasNotificationsLabel">
                        <div class="offcanvas-header px-5">
                            <h3 class="offcanvas-title" id="offcanvasNotificationsLabel">Notifications</h3>

                        </div>

                        <div class="offcanvas-body p-0">
                            <div class="list-group list-group-flush">
                                <a href="javascript: void(0);" class="list-group-item list-group-item-action">
                                    <div class="d-flex">
                                        <div class="avatar avatar-circle avatar-xs me-2">
                                            <img src="" alt="..." class="avatar-img" width="30" height="30"/>
                                        </div>

                                        <div class="d-flex flex-column flex-grow-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Kipart</h5>
                                                <small class="text-muted">il y a 10 minutes</small>
                                            </div>

                                            <div class="d-flex flex-column">
                                                <p class="mb-1">Titre:Recapitulatif de la journ??e</p>
                                                <small class="text-secondary">Nous passerons dans vos locaux pour vous formez en maintenance de vos syst??me de ticketing...</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript: void(0);" class="list-group-item list-group-item-action">
                                    <div class="d-flex">
                                        <div class="avatar avatar-circle avatar-xs me-2">
                                            <img src="" alt="..." class="avatar-img" width="30" height="30"/>
                                        </div>

                                        <div class="d-flex flex-column flex-grow-1">
                                            <div class="d-flex w-100 justify-content-between">
                                                <h5 class="mb-1">Kipart</h5>
                                                <small class="text-muted">il y 1 Heure</small>
                                            </div>

                                            <div class="d-flex flex-column">
                                                <p class="mb-1">Titre:Ticketing</p>
                                                <small class="text-secondary">Bien evidement nous sommes disponible...</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                            </div>
                        </div>
                    </div>
        </>
        
    )
}
export default Notification;