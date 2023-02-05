const Notification=()=>{
    return (
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
                                                <p class="mb-1">Titre:Recapitulatif de la journée</p>
                                                <small class="text-secondary">Nous passerons dans vos locaux pour vous formez en maintenance de vos système de ticketing...</small>
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
    )
}
export default Notification;