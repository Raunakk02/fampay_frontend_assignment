import { useEffect, useState } from "react";
import HC1 from "./HC1";
import HC3 from "./HC3";
import HC5 from "./HC5";
import HC6 from "./HC6";
import HC9 from "./HC9";

const Components = { HC1, HC3, HC5, HC6, HC9 };

function ScrollContainer() {
	let [cardGroups, setCardGroups] = useState([]);

	useEffect(() => {
		fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);
				setCardGroups(data["card_groups"]);
			});
	}, []);

	console.clear();
	console.log(cardGroups);

	let content = cardGroups.map((e) => {
		let arr = [];

		e["cards"].forEach((element, index) => {
			var MyComp = Components[e["design_type"]];
			arr.push(<MyComp key={index} />);
		});

		return arr;
	});

	console.log(content);

	return (
		<div className="scroll-container">
			{/* <HC3></HC3>
			<HC6></HC6>
			<HC5></HC5>
			<HC9></HC9>
			<HC1></HC1> */}
			{content}
		</div>
	);
}

export default ScrollContainer;
