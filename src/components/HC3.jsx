import { useState } from "react";
import { useLongPress } from "use-long-press";
import dismiss from "../assets/images/dismiss.png";
import remind from "../assets/images/remind.png";
import getText from "../helper";

function HC3(props) {
	let [marginLeft, setMarginLeft] = useState("0");

	let cardStyle = {
		margin: props.addRightMargin ? "0 5px 0 0" : "0px 0",
		minWidth: props.isScrollable ? "90%" : "",
		backgroundColor: props.data.bg_color,
		backgroundImage: `url(${props.data.bg_image.image_url})`,
		marginLeft: marginLeft,
		transition: "1s all ease",
	};

	const bind = useLongPress(() => {
		setMarginLeft("150px");
	});

	function getCTAs(cta) {
		return cta.map((el) => {
			const buttonStyle = {
				backgroundColor: el.bg_color ?? "",
				color: el.text_color ?? "white",
			};

			return (
				<button
					className="cta"
					onClick={(event) => {
						window.location.assign(el.url);
						event.stopPropagation();
					}}
					style={buttonStyle}
				>
					{el.text}
				</button>
			);
		});
	}

	return (
		<div className="back-container">
			<div className="hc3-buttons">
				<div
					className="button"
					onClick={() => {
						props.handleRemind(props.data.name);
					}}
				>
					<img src={remind} alt="remind" />
					<p>remind later</p>
				</div>
				<div
					className="button"
					onClick={() => {
						props.handleDismiss(props.data.name);
					}}
				>
					<img src={dismiss} alt="dismiss" />
					<p>dismiss now</p>
				</div>
			</div>
			<div
				className="card hc3"
				style={cardStyle}
				onClick={() => {
					window.location.assign(props.data.url);
				}}
				{...bind()}
			>
				<h3>
					{getText(
						props.data.formatted_title.entities,
						props.data.formatted_title.text.split("{}")
					) ?? props.data.title}
				</h3>
				<h5>
					{getText(
						props.data.formatted_description.entities,
						props.data.formatted_description.text.split("{}")
					) ?? props.data.title}
				</h5>
				{getCTAs(props.data.cta)}
			</div>
		</div>
	);
}

export default HC3;
