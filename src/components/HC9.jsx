function HC9(props) {
	const cardStyle = {
		// minWidth: `{props.data.bg_image.aspect_ratio * 100}px`,
		// maxWidth: `{props.data.bg_image.aspect_ratio * 100}px`,
	};
	return (
		<div className="card hc9" style={cardStyle}>
			<img src={props.data.bg_image.image_url} alt={props.data.name} />
		</div>
	);
}

export default HC9;
