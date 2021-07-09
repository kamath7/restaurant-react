import React from 'react'
import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Fish Meal',
        description: 'Finest fish cooked in Coconut curry and Rice',
        price: 240,
    },
    {
        id: 'm2',
        name: 'Paneer Butter Masala',
        description: 'An Indian specialty!',
        price: 189,
    },
    {
        id: 'm3',
        name: 'Rabdi',
        description: 'A Milk Savory',
        price: 45,
    },
    {
        id: 'm4',
        name: 'Vanilla Ice Cream',
        description: 'Ice Cream with a touch of elegance',
        price: 20,
    },
];
const AvailableMeals = () => {
    return (
        <section className={classes.meals}>
            <ul>
                {DUMMY_MEALS.map((meal) => <li key={meal.id}>{meal.name}</li>)}
            </ul>
        </section>
    )
}

export default AvailableMeals
