
import image1 from "./moutour.svg";
import image2 from "./mekla.svg";
import ControlledCarousel from './Carousel'
import React from 'react'

const Home = () => {
  return (
    <div>
       <ControlledCarousel />
       <div>
        <h1>
        Meilleurs restaurants
        </h1>
        
       </div>
       <div className="sect3">
        <h1>
        Faites livrer tout ce que vous voulez
        </h1>
       <div className="abthome">
       <div>
            <img src={image1}></img>
            <h3>Livraison rapide</h3>
            <p>Notre rapidité est notre fierté. Commandez ou envoyez ce que vous voulez dans votre ville et on vous livre en quelques minutes.</p>
        </div>
        <div>
            <img src={image2}></img>
            <h3>Les meilleurs restaurants de votre ville</h3>
            <p>Avec un grand choix de restaurants, vous trouverez toujours votre plat préféré et découvrirez de nouveaux restaurants !</p>
        </div>
       </div>
      
       </div>
       
    </div>
  )
}

export default Home
