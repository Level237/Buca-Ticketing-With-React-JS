import {BsPlusLg,BsFillPeopleFill} from 'react-icons/bs';
import Card from './components/card/Card';

const Main=()=>{

    return (
        <div className="container-fluid">
            <div className="row mb-3 align-items-center">
                    <div className="col-6 col-lg-9">
                        <h1 className="h2">
                            Ticketing

                        </h1>
                    </div>
                    <div className="col-6 col-lg-3">
                        <button type="button" className="btn buca-color p-2" data-bs-toggle="modal" data-bs-target="#createKeyModal" style={{ paddingLeft:`22px`,paddingRight:`22px` }}>
                            <BsPlusLg style={{ height:`14`,width:`25` }}/>
                            Ajouter un Ticket
                        </button>
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-6 col-xxl-3 d-flex"> 
                        <Card title='Tickets' total='6 328' totalOfWeek="200" TotalOfMonth="1050" svg={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-ticket-detailed text-buca-theme" viewBox="0 0 16 16"> <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5ZM5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z"/> <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6V4.5ZM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5h-13Z"/> </svg>}/>
                        
                    </div>
                    <div className="col-lg-6 col-xxl-3 d-flex"> 
                        <Card title='Passengers' total='6 328' totalOfWeek="200" TotalOfMonth="1050" svg={<svg viewbox="0 0 24 24" height="20" width="20" class=" text-buca-theme" xmlns="http://www.w3.org/2000/svg"><path d="M2.250 6.000 A2.250 2.250 0 1 0 6.750 6.000 A2.250 2.250 0 1 0 2.250 6.000 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M4.5,9.75A3.75,3.75,0,0,0,.75,13.5v2.25h1.5l.75,6H6" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M17.250 6.000 A2.250 2.250 0 1 0 21.750 6.000 A2.250 2.250 0 1 0 17.250 6.000 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M19.5,9.75a3.75,3.75,0,0,1,3.75,3.75v2.25h-1.5l-.75,6H18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M9.000 3.750 A3.000 3.000 0 1 0 15.000 3.750 A3.000 3.000 0 1 0 9.000 3.750 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path d="M17.25,13.5a5.25,5.25,0,0,0-10.5,0v2.25H9l.75,7.5h4.5l.75-7.5h2.25Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>}/>
                        
                    </div>
                </div>
        </div>
    )
}
export default Main;