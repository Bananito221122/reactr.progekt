import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.Header}>
         <div className={styles.topbar}>
              <div className={styles.half}>
                               <img className={styles.logo} src='https://images.icon-icons.com/1515/PNG/512/football_105104.png'></img>
               <p>интернет магазин для вратарей</p>
             
               </div>
                <div className={styles.half}>
                    
                  <p>статьи новинки скидки вход</p>
              
                   <div className={styles.baner}>
                          
                   </div>
          
                </div>

              </div> 
             <p className={styles.text}>Keeper-shop.ru</p>
             <p className={styles.phone}>+79207660804/WhatsApp</p>
             <div className={styles.sear}>
                  <input 
                  type="text"
                  className={styles.search}
                  placeholder="search"
                  />
              </div>
            </div>
            
            

          
       
        ); 
      
    }; 
    export default Header