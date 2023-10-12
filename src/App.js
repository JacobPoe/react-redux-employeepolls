import { Route, Routes } from 'react-router';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FourOhFour from './components/404';
import Home from './components/Home';
import Leaderboard from './components/Leaderboard/Leaderboard';
import NewQuestion from './components/Questions/NewQuestion';
import PollsNavbar from './components/PollsNavbar';
import Question from './components/Questions/Question';

const App = () => {
  return (
    <>
      <div data-testid="app" className="App">
        <>
          <PollsNavbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/leaderboard" element={<Leaderboard />} />
            <Route exact path="/new" element={<NewQuestion />} />
            <Route exact path="/question/:id" element={<Question />} />
            <Route path="*" element={<FourOhFour />} />
          </Routes>
        </>
      </div>
    </>
  );
};

export default App;
