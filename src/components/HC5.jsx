function HC5(props) {
	const cardStyle = {
		margin: props.addRightMargin ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "80%" : "",
		backgroundColor: props.data.bg_color,
	};
	return (
		<div
			className="card hc5"
			style={cardStyle}
			onClick={() => {
				window.location.assign(props.data.url);
			}}
		>
			<img src={props.data.bg_image.image_url} alt="img" />
		</div>
	);
}

export default HC5;
