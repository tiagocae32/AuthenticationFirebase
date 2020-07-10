import React from 'react';
import { Link } from 'react-router-dom';



const Home = () => {
    return ( 

        <div>

                <h1>Home</h1>

                <Link to="/formularioLogin">Login usuario</Link>
                <hr/>
                <Link to="/formularioCreacionUsuario">Creacion Usuario</Link>


        </div>
      


     );
}
 
export default Home;