 import './NavBar.css'

 function NavBar(){
    return (
        <div className='nav'> 
            <div className="navlogo">Ev-olution</div>
            <ul className="navmenu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='navContact'>Contact</li>
            </ul>
           
        </div>
    )
 }
 export default NavBar