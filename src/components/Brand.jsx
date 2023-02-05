import buca from '../assets/images/buca.jpg';
const Brand=({width,height})=>{

    return (
        <a className="navbar-brand">
            <img src={buca} width={width} height={height}/><span style={{ color:`white` }}>Buca Voyage Douala</span>
        </a>
    )
}

export default Brand;