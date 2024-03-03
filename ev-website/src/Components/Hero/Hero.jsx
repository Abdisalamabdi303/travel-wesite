 import './Hero.css'
 
 import React from 'react' 
 import arrow from '../../assets/arrow.png'
 import pause2 from '../../assets/pause2.png'
 import play2 from '../../assets/play2.png'
 
 function Hero({heroData,setHeroCount,heroCount,setPlayStatus,playStatus}){
    return (
        <div className='Hero'>
            <div className='heroText'>
                <p>{heroData.text1}</p>
                <p>{heroData.text2}</p>

            </div>
            <div className="heroExplore">
                <p>
                    Explore features
                </p>
                <img src={arrow} alt="arrow" />
            </div>
            <div className="play">
                <ul className='herodots'>
                    <li onClick={()=>setHeroCount(0)} className={heroCount===0? "herodot orange":"herodot"}></li>
                    <li onClick={()=>setHeroCount(1)} className={heroCount===1? "herodot orange":"herodot"}></li>
                    <li onClick={()=>setHeroCount(2)}  className={heroCount===2? "herodot orange":"herodot"}></li>
                </ul>
            </div>
           <div className="heroplay">
                <img onClick={()=>setPlayStatus(!playStatus)} src={playStatus? pause2:play2} height={50} width={50}  />
                <p>See the video</p>
           </div>

        </div>
    )
 }
 export default Hero