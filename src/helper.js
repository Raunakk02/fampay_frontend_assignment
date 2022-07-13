// Method for extracting rich formatted texts
// from entities and formatted_text
function getText(entities, formattedText) {
	let finalText = [];
	let i = 0,
		j = 0;
	for (; i < formattedText.length && j < entities.length; i++, j++) {
		finalText.push(<span>{formattedText[i]}</span>);
		finalText.push(
			<span style={{ color: entities[i].color }}>{entities[i].text}</span>
		);
	}
	while (i < formattedText.length) {
		finalText.push(<span>{formattedText[i]}</span>);
		i++;
	}
	while (j < entities.length) {
		finalText.push(
			<span style={{ color: entities[i].color }}>{entities[i].text}</span>
		);
		j++;
	}
	return finalText;
}

export default getText;
