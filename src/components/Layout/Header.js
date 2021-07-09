import React from 'react'
import classes from './Header.module.css'
import mealsImage from '../../assets/meals.jpg'
const Header = () => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>Meal Master</h1>
                <button>Your Cart</button>
            </header>
            <div>
                <img src={mealsImage} className={classes['main-image']} alt={"Some dude's table"}/>
            </div>
        </React.Fragment>
    )
}

export default Header
