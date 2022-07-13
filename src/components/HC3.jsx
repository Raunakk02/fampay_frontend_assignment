import getText from "../helper";

function HC3(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "90%" : "",
		backgroundColor: props.data.bg_color,
		backgroundImage: `url(${props.data.bg_image.image_url})`,
	};

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
		<div
			className="card hc3"
			style={cardStyle}
			onClick={() => {
				window.location.assign(props.data.url);
			}}
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
	);
}

export default HC3;
