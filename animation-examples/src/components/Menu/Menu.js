import React from 'react';
import styles from './Menu.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Menu = () => {
    return (
        <div className={cx("Menu")}>
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
