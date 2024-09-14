import logo from '../logo.svg';
import '../App.css';
import { Link } from 'react-router-dom'


function Entete() {
    return (
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
             <p> Développent en REACT </p>
             <a className="App-link" href="https://www.liyanadev.fr" target="_blank" rel="noopener noreferrer" >  Rendez-vous sur mon site</a>
             <nav>
                <Link to="/">Accueil</Link>
                <Link to="/survey">Questionnaire</Link>

             </nav>
        </div>
    )
}

export default Entete