import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1>this is home</h1>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;