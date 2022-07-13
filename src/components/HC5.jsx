function HC5(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "80%" : "",
		backgroundColor: props.data.bg_color,
	};
	return (
		<div className="card hc5" style={cardStyle}>
			<a href={props.data.url}>
				<img src={props.data.bg_image.image_url} alt="img" />
			</a>
		</div>
	);
}

export default HC5;
