import './Navbar.scss'
import Spline from './Spline'; // Import the newly created component


const Navbar = () => {
    return (
        <div className="Container">
            <div className="Logo-Sec">
            <Spline />
            </div>
            <div className="Nav-Sec">
                <ul>
                    <li><button>Complaints</button></li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar