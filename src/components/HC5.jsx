function HC5(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "80%" : "",
	};
	return (
		<div className="card hc5" style={cardStyle}>
			<a href="https://www.gamezop.com/g/HJT46GkPcy7?id=bM14MfArj&fp_type=fpGame">
				<img
					src="https://westeros-staging.s3.amazonaws.com/media/images/generic/a612b3e534ba4ca389293a2b92c7ba25.jpeg"
					alt="img"
				/>
			</a>
		</div>
	);
}

export default HC5;
