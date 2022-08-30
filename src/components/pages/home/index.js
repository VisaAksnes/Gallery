import { useState, useEffect } from 'react';
import Styles from './Home.module.css';
import Image from './Image';

const Home = ({img}) => {
    const [showmodal, setShowModal] = useState(false);
    const [imageModal, setImageModal] = useState('');
    const [onLoadImg, setOnLoadImg] = useState(img.slice(0,6));
    const [noMoreImage,setNoMoreImage] = useState(false);
    function OnClickImage(url){
        showmodal==false?setShowModal(true):setShowModal(false);
        setImageModal(url);
    }

    function LoadMoreImgs(){
        let joinArray = [];
        joinArray = onLoadImg.map(x => x);

        if(onLoadImg.length!=img.length){
            for(let i=onLoadImg.length; i<img.length;i++){
                if(i>onLoadImg.length+2){
                    break; //Load só de 3 novas imagens (2 = 3 novas imagens)
                }
                joinArray.push(img[i]);
            }
            setOnLoadImg(joinArray);
        }
        else{
            setNoMoreImage(true);
        }
      
        
    }



    return(
       <>
        {showmodal==true&&
        <div className={Styles.modalContainer} onClick={()=>setShowModal(false)}>
            <div className={Styles.showModal}>
                <img src={imageModal} alt='Imagem do modal' onClick={OnClickImage}/>
            </div>
        </div>
        }

        <div className={Styles.container}>
            <h2 className={Styles.containerTitle}>Happy music day!</h2>
            <div className={Styles.flexContainer}>
                {onLoadImg.map(item=>
                    <Image 
                        id={item.id} 
                        url={item.url} 
                        alt={item.alt} 
                        band={item.band} 
                        key={item.alt} 
                        onClickImage={OnClickImage}
                    />)
                }
            </div>  
            <div className={Styles.loadMore}>
                {noMoreImage?
                <p>Que pena, acabaram nossas imagens :c</p>
                :
                    <button onClick={LoadMoreImgs}>Load more images</button>
                }
            </div> 
        </div>
       
       </>

    )
}
export default Home;