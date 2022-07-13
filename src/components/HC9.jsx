function HC9(props) {
	const cardStyle = {};
	return (
		<div
			className="card hc9"
			style={cardStyle}
			onClick={() => {
				window.location.assign(props.data.url);
			}}
		>
			<img src={props.data.bg_image.image_url} alt={props.data.name} />
		</div>
	);
}

export default HC9;
