import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';

const Main_Layout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main_Layout;