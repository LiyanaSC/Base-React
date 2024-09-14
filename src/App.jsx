import './App.css';

import Entete from './components/Entete.jsx';
import Routersite from './components/Routersite.jsx';


function App() {
  return (
    <div className="App">
      <Routersite>
        <Entete />
      </Routersite>
    </div>
  );
}

export default App;
