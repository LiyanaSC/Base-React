import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Survey from './Survey.jsx';
import Home from '../pages/Home.jsx';
import Error from '../pages/Error.jsx';

function Routersite({children}) {

  return (
    <div className="App">
      <Router>
      {children}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/*" element={<Error />} />
        </Routes>
    </Router>
    </div>
  );
}

export default Routersite;
