import { Route, Routes } from 'react-router-dom';
// switch are replaced with Routes
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
{/*  insted of routes switch were used in older version react */}
      <Routes>  
        <Route path="/" element={<AllMeetupsPage/>} />
        <Route path="/new-meetup" element={<NewMeetupPage/>} />
        <Route path="/favorites'" element={<FavoritesPage/>} />
      </Routes>
    </Layout>
  );
}

export default App;