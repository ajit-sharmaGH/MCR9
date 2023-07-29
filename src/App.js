import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ExplorePage } from './Pages/ExplorePage';
import { WatchLaterPage } from './Pages/WatchLaterPage';
import { PlaylistPage } from './Pages/PlaylistPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element = {<HomePage />} />
        <Route path="/explore"  element = {<ExplorePage/>} />
        <Route path="/watchLater"  element = {<WatchLaterPage/>} />
        <Route path="/playlist"  element = {<PlaylistPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
