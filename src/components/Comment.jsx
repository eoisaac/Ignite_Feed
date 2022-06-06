import styles from './Comment.module.css';

import { HandsClapping, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import { useState } from 'react';

export const Comment = ({ content, onDeleteComment}) => {

	const [ clapCount, setClapCount ] = useState(0);

	const handleClapComment = () => {
		setClapCount((state) => {
			return state + 1
		});
	};

	const handleDeleteComment = () => {
		onDeleteComment(content);
	};

	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/eoisaac.png" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header className={styles.header}> 
						<div>
							<strong className={styles.authorName}>
								Isaac Santiago
							</strong>
							<time 
								className={styles.time} 
								title="3th July at 11:27 PM" 
								dateTime="2022-06-03 11:27:21 PM">
								Cerca de 1h atrás
							</time>
						</div>

						<button className={styles.deleteBtn} onClick={handleDeleteComment} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p className={styles.commentMessage}>{content}</p>
				</div>

				<footer className={styles.footer}>
					<button className={styles.clapBtn} onClick={handleClapComment}>
						<HandsClapping size={24} />
						Aplaudir 
						<span className={styles.clapsCount}>{clapCount}</span>
					</button>
				</footer>
			</div>
		</div>
	);
};