const Search=()=>{

    return (
        <form className="d-none d-md-inline-block me-auto">
                    <div className="input-group input-group-merge">

                        
                        <input type="text" className="form-control bg-light-green border-light-green w-250px" placeholder="Rechercher...." aria-label="Search for any term"/>

                        
                        <span className="input-group-text bg-light-green border-light-green p-0">

                            
                            <button className="btn buca-color rounded-2 w-30px h-30px p-0 mx-1" type="button" aria-label="Search button">
                                <svg viewbox="0 0 24 24" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M0.750 9.812 A9.063 9.063 0 1 0 18.876 9.812 A9.063 9.063 0 1 0 0.750 9.812 Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" transform="translate(-3.056 4.62) rotate(-23.025)"></path><path d="M16.221 16.22L23.25 23.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></svg>
                            </button>
                        </span>
                      </div>
                </form>
    )
}
export default Search;