import HC1 from "./HC1";
import HC3 from "./HC3";
import HC5 from "./HC5";
import HC6 from "./HC6";
import HC9 from "./HC9";

function ScrollContainer() {
	return (
		<div className="scroll-container">
			<HC3></HC3>
			<HC6></HC6>
			<HC5></HC5>
			<HC9></HC9>
			<HC1></HC1>
		</div>
	);
}

export default ScrollContainer;
