import styles from './Post.module.css';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import { useState } from 'react';

export const Post = ({author, publishedAt, content}) => {
	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR,
	});
	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const [ comments, setComments ] = useState([
		'Post muito daora!! 🚀'
	]);
	const [newCommentText, setNewCommentText] = useState('');

	const handleCreateNewComment = () => {
		event.preventDefault();
		setComments([...comments, newCommentText]);
		setNewCommentText('');
	};

	const handleNewCommentChange = () => {
		setNewCommentText(event.target.value);
	};

	const deleteComment = (commentToDelete) => {
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment !== commentToDelete;
		});

		setComments(commentsWithoutDeletedOne);
	};

	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.author}>
					<Avatar  src={author.avatarUrl} />
					<div className={styles.authorInfos}>
						<strong className={styles.authorName}>
							{author.name}
						</strong>
						<span className={styles.authorRole}>
							{author.role}
						</span>
					</div>
				</div>

				<time 
					className={styles.time} 
					title={publishedDateFormatted} 
					dateTime={publishedAt.toISOString()}>

					{publishedDateRelativeToNow}
				</time>
			</header>

			<div className={styles.content}>
				{content.map(line => {
					if (line.type === 'paragraph') 
						return <p key={line.content}>{line.content}</p>

					if (line.type === 'link')
						return (
							<p key={line.content}>
								<a href="">{line.content}</a>
							</p>
						);
				})}
			</div>

			<form onSubmit={handleCreateNewComment} className={styles.commentForm}>
				<strong className={styles.formTitle}>
					Deixe seu feedback!
				</strong>

				<textarea 
					name="comment"
					className={styles.textArea}
					placeholder="Deixe seu comentário"
					value={newCommentText}
					onChange={handleNewCommentChange}
				/>

				<footer className={styles.footer}>
					<button className={styles.button} type="submit">

						Publicar
					</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				{comments.map(comment => {
					return (
						<Comment 
							key={comment} 
							content={comment} 
							onDeleteComment={deleteComment} 
						/>
					);
				})}
			</div>
		</article>
	);
};