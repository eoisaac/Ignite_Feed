export const Post = (props) => {
	const { author, content } = props;

	return (
		<p>
			<strong>Autor:</strong> {author}
			<br />
			<strong>Content:</strong> {content}
		</p>
	)
}
