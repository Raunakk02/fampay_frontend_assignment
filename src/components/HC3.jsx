function HC3(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "90%" : "",
	};
	return (
		<div className="card hc3" style={cardStyle}>
			<h3>Big Display Card with Action</h3>
			<h5>
				This is a sample text for subtitle that you can add to contextual cards
			</h5>
			<button className="cta">Action</button>
		</div>
	);
}

export default HC3;
