import usericon from "../assets/images/usericon.png";

function HC6(props) {
	const cardStyle = {
		margin: props.isScrollable ? "10px 5px 10px 0" : "10px 0",
		minWidth: props.isScrollable ? "300px" : "",
	};
	return (
		<div className="card hc6" style={cardStyle}>
			<div className="leading-title">
				<img src={usericon} alt="user-icon" />
				<h3>Small card with arrow</h3>
			</div>
			<h1>&rsaquo;</h1>
		</div>
	);
}

export default HC6;
