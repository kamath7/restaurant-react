import React from 'react';
import classes from './MealItem.module.css';
const MealItem = (props) => {
	return (
		<li className={classes.meal}>
			<div>
				<h3>{props.name}</h3>
				<div className={classes.description}>{props.description}</div>
				<div className={classes.price}>{`₹ ${props.price.toFixed(2)}`}</div>
			</div>
			<div>{/*Add Form */}</div>
		</li>
	);
};

export default MealItem;
