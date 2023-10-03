import './css/button.css';
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <>
            <h1 style={{"font-family":"Vermin","fontSize":"4rem","color":"red"}} className='my-4'>SNAKE GAME</h1>
            <button class='glowing-btn mt-3'><span class='glowing-txt'><Link to='/Board' >START</Link></span></button>
        </>
    );
}

export default Homepage;