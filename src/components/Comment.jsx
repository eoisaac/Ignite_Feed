import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export const Comment = () => {
	return (
		<div className={styles.comment}>
			<img className={styles.avatar} src="https://github.com/eoisaac.png" />

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

						<button className={styles.deleteBtn} title="Deletar comentário">
							<Trash size={24} />
						</button>
					</header>

					<p className={styles.commentMessage}>
						Muito bom Devon, parabéns!! 👏👏
					</p>
				</div>

				<footer className={styles.footer}>
					<button className={styles.clapBtn}>
						<ThumbsUp size={24} />
						Aplaudir <span className={styles.clapsCount}>20</span>
					</button>
				</footer>
			</div>
		</div>
	);
};