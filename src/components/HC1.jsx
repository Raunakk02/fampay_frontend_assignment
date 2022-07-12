function HC1(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "250px" : "",
	};
	return (
		<div className="card hc1" style={cardStyle}>
			<div className="leading-container">
				<img
					src="https://westeros-staging.s3.amazonaws.com/media/images/generic/4ce76db9e755497f8d176764b6d590ba.png"
					alt="user-icon"
				/>
				<div className="title-subtitle">
					<h4>Small display card</h4>
					<p>Arya Stark</p>
				</div>
			</div>
		</div>
	);
}

export default HC1;
