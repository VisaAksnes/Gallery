import Styles from './Image.module.css';
import {useState} from 'react';
export default function Image(props){
    const [showName, setShowName] = useState(false);

    return(
        <>
            <div className={Styles.imageContainer}>
                <img src={props.url} alt={props.alt} key={props.alt} onClick={()=>props.onClickImage(props.url)} onMouseOver={()=>setShowName(true)} onMouseLeave={()=>setShowName(false)}/>
                <div className={Styles.imageDescription}>
                    {showName&&<p>{props.alt}</p>}
                </div>
            </div>
        </>
    );
}