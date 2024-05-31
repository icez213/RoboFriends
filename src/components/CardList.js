import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
	const cards = robots.map(
		(robot, i) => {
			return (
				<Card
					key={i}
					id={robot.id}
					name={robot.name}
					email={robot.email}
				/>
			);
		}
	);
	return (
		<React.Fragment>
			{cards}
		</React.Fragment>
	);
};

export default CardList;
