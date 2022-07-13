import { useEffect, useState } from "react";
import PullToRefresh from "react-simple-pull-to-refresh";
import HC1 from "./HC1";
import HC3 from "./HC3";
import HC5 from "./HC5";
import HC6 from "./HC6";
import HC9 from "./HC9";
import NonScrollableComponent from "./NonScrollableComponent";
import ScrollableComponent from "./ScrollableComponent";

const Components = { HC1, HC3, HC5, HC6, HC9 };

function ScrollContainer() {
	let [cardGroups, setCardGroups] = useState([]);
	let [remindedNames, setRemindedNames] = useState([]);
	let [dismissedNames, setDismissedNames] = useState([]);

	function handleRemind(name) {
		setRemindedNames((prev) => {
			if (prev.includes(name)) {
				return prev;
			}
			return [...prev, name];
		});
	}

	function handleDismiss(name) {
		if (!dismissedNames.includes(name))
			window.localStorage.setItem(
				"dismissedNames",
				JSON.stringify([...dismissedNames, name])
			);
		setDismissedNames((prev) => {
			if (prev.includes(name)) {
				return prev;
			}
			return [...prev, name];
		});
	}

	function getData() {
		fetch("https://run.mocky.io/v3/4d8db890-5327-4c69-a3ef-b4f5f5225d17")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data, Date.now());
				setCardGroups(data["card_groups"]);
			});
	}

	function handleRefresh() {
		setTimeout(() => {
			window.location.reload();
		}, 1000);
	}

	function setDismissedNamesHandler() {
		let localDismissedNames = window.localStorage.getItem("dismissedNames");
		let parsedNames = JSON.parse(localDismissedNames) ?? [];
		setDismissedNames(parsedNames);
	}

	useEffect(() => {
		getData();
		setDismissedNamesHandler();
	}, []);

	// console.clear();
	console.log(cardGroups);

	let content = cardGroups.map((e) => {
		let isScrollable = e["is_scrollable"] === true;
		let arr = [];
		e["cards"].forEach((cardData, index) => {
			var MyComp = Components[e["design_type"]];
			if (
				!remindedNames?.includes(cardData["name"]) &&
				!dismissedNames?.includes(cardData["name"])
			)
				arr.push(
					<MyComp
						key={index}
						isScrollable={isScrollable}
						addRightMargin={e["cards"].length > 1}
						data={cardData}
						height={e["height"]}
						handleRemind={handleRemind}
						handleDismiss={handleDismiss}
					/>
				);
		});

		return isScrollable ? (
			<ScrollableComponent components={arr} />
		) : (
			<NonScrollableComponent components={arr} />
		);
	});

	console.log(content);

	return (
		<PullToRefresh onRefresh={handleRefresh}>
			<div className="scroll-container">{content}</div>
		</PullToRefresh>
	);
}

export default ScrollContainer;
