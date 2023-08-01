import Cop from '../assets/Cop.svg'
import './Hero.scss'

const Hero = () => {
    return (
        <div className="Container">
            <div className="Text">
                <h1>
                    Revolutionizing law enforcement and Integrity of National security!
                </h1>
            </div>
            <div className="Cop-Img">
                <img src={Cop} alt="cop" />
            </div>
        </div>

    )
}

export default Hero