import usericon from "../assets/images/usericon.png";

function HC6() {
	return (
		<div className="card hc6">
			<div className="leading-title">
				<img src={usericon} alt="user-icon" width="30px" height="30px" />
				<h3>Small card with arrow</h3>
			</div>
			<h1>&rsaquo;</h1>
		</div>
	);
}

export default HC6;
