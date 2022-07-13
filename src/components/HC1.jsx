import getText from "../helper";

function HC1(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "250px" : "",
		backgroundColor: props.data.bg_color,
	};
	return (
		<div
			className="card hc1"
			style={cardStyle}
			onClick={() => {
				window.location.assign(props.data.url);
			}}
		>
			<div className="leading-container">
				<img
					src="https://westeros-staging.s3.amazonaws.com/media/images/generic/4ce76db9e755497f8d176764b6d590ba.png"
					alt="user-icon"
				/>
				<div className="title-subtitle">
					<h4>
						{getText(
							props.data.formatted_title.entities,
							props.data.formatted_title.text.split("{}")
						) ?? props.data.title}
					</h4>
					<p>Arya Stark</p>
				</div>
			</div>
		</div>
	);
}

export default HC1;
