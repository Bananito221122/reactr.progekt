import styles from './Card.module.css'
import imgURL from './../../public/images/ba.webp'
const Card = () => {
    return (
      
<div className={styles.biba}>   
    <img src={imgURL} alt=""className={styles.Cardimg} />
    <div>PREDATOR PRASE 100$</div>
</div>
        
       
        ); 
      
    }; 
    export default Card