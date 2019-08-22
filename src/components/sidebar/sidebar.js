import React from 'react'
import './sidebar.scss'
import {Link} from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="col-lg-2 sidebar">
            <ul>
                <li><Link to="/">Current Day</Link></li>
                <li><Link to="/forFiveDays">Five days</Link></li>
            </ul>
        </div>
    )
}

export default Sidebar