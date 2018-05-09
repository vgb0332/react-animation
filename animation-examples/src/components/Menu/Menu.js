import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/example1">Example1</Link></li>
                <li><Link to="/example2">Example2</Link></li>
                <li><Link to="/example3">Example3</Link></li>
                <li><Link to="/example4">Example4</Link></li>
                <li><Link to="/example5">Example5</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;
