import { Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Profile from './Profile';
import Events from './Events';
import Friends from './Friends';
import Groups from './Groups';

const Dashboard = () => {
  return (
    <div className=''>
      <Navbar />
      <div className="pt-28 md:pt-[2rem] bg-gray-100">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/events" element={<Events />} />
          <Route path="/groups" element={<Groups />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
