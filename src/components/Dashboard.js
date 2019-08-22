import React from 'react';
import "./styles/dashboard.css";
import Sidebar from "./Sidebar";
import Album from "./Album";

class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashCont">
                <Sidebar />
                <Album />
            </div>
        );
    }
}

export default Dashboard;
