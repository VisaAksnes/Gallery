import Styles from './Footer.module.css';
import {FaFacebookSquare, FaLinkedin, FaGithubSquare} from "react-icons/fa";

const index = () => {
    return(
        <div className={Styles.container}>
            <p>@Vinícius Ávila</p>
            <ul className={Styles.icons}>
                <li><a href='http://fb.com/vinicius.avila.fte' target="_blank"><FaFacebookSquare/></a></li>
                <li><a href="https://www.linkedin.com/in/vin%C3%ADcius-%C3%A1vila-8a0871167/" target="_blank"><FaLinkedin/></a></li>
                <li><a href="https://github.com/VisaAksnes" target="_blank"><FaGithubSquare/></a></li>
            </ul>
        </div>
    );
}
export default index;