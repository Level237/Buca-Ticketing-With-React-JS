const Card=({title,total,totalOfWeek,svg,TotalOfMonth})=>{

    return(
        <div className="card border-0 flex-fill w-100">
                            <div className="card-body">
                                    <div className="row">
                                        <div className="col">

                                            
                                            <h5 className="text-uppercase text-muted fw-semibold mb-2">
                                                {title}
                                            </h5>

                                            
                                            <h2 className="mb-0">
                                                {total}
                                            </h2>
                                        </div>
                                        <div className="col-auto">

                                            
                                            {svg}
                                        </div>
                                    </div>
                                </div>
                            <div class="card-footer">
                                <div class="row justify-content-between">
                                    <div class="col-auto">

                                      
                                        <p class="fs-6 text-muted text-uppercase mb-0">
                                            Cette Semaine
                                        </p>

                                       
                                        <p class="fs-5 fw-bold mb-0">
                                            {totalOfWeek}
                                        </p>
                                    </div>
                                    <div class="col text-end text-truncate">

                                       
                                        <p class="fs-6 text-muted text-uppercase mb-0">
                                            Mensuel
                                        </p>

                                      
                                        <p class="fs-5 fw-bold mb-0">
                                           {TotalOfMonth}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default Card;