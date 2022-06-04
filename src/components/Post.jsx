import styles from './Post.module.css';

export const Post = () => {
	return (
		<article className={styles.post}>
			<header className={styles.header}>
				<div className={styles.author}>
					<img 
						className={styles.avatar}
						src="https://github.com/eoisaac.png" 
					/>
					<div className={styles.authorInfos}>
						<strong className={styles.authorName}>
							Isaac Santiago
						</strong>
						<span className={styles.authorTitle}>
							Web Developer
						</span>
					</div>
				</div>

				<time className={styles.time} title="3th July at 11:27 PM" dateTime="2022-06-03 11:27:21 PM">
					Publicado há 1h
				</time>
			</header>

			<div className={styles.content}>
				<p>Fala galeraa 👋</p>
				<p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
 				<p>
					 <a href=""> jane.design/doctorcare </a>
				</p>
				<p> 
					<a href="">#novoprojeto</a>{' '}
					<a href="">#nlw</a>{' '}
					<a href="">#rocketseat</a>
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong className={styles.formTitle}>
					Deixe seu feedback!
				</strong>

				<textarea 
					className={styles.textArea}
					placeholder="Deixe seu comentário"
				/>

				<footer className={styles.footer}>
					<button className={styles.button} type="submit">
						Publicar
					</button>
				</footer>
			</form>
		</article>
	);
};