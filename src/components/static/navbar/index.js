import Style from './Menu.module.css';
import {Link} from 'react-router-dom';
const Menu = () =>{
    return(
        <div className={Style.menu}>
            <h2 className={Style.topTitle}>Gallery</h2>
            <ul className={Style.menu_Ul}>
                <li><Link to='/'>Gallery</Link></li>
                <li><Link to='/about'>About</Link></li>
            </ul>
        </div>
    );
}

export default Menu;