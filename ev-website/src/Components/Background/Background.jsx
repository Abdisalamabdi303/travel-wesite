import './Background.css'
import React from 'react'
import video1 from '../../assets/video1.mp4'
import car1 from '../../assets/car1.jpg'
import car2 from '../../assets/car2.jpg'
import car3 from '../../assets/car3.jpg'

function Background({playStatus,heroCount}){

   if (playStatus){
    <video className='background' autoPlay loop muted>
        <source src={video1} type='video/mp4' alt="your browser doesnt support video" />
    </video>
   }
   else if(heroCount===0){
    return <img src={car1} className='background' />
   }
   else if(heroCount===1){
    return <img src={car2} className='background' />
   }
   else if(heroCount===2){
    return <img src={car3} className='background' />
   }
}
export default Background