import { BsSearch} from 'react-icons/bs';

const Search=()=>(
    <form className="d-none d-md-inline-block me-auto">
        <div className="input-group input-group-merge">


            <input type="text" className="form-control bg-light-green border-light-green w-250px" placeholder="Rechercher...." aria-label="Search for any term" />


            <span className="input-group-text bg-light-green border-light-green p-0">


                <button className="btn buca-color rounded-2 w-30px h-30px p-0 mx-1" type="button" aria-label="Search button">
                <BsSearch/> 
                </button>
            </span>
        </div>
    </form>
)
export default Search;