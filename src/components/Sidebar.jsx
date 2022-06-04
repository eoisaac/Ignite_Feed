import { PencilLine } from 'phosphor-react';
import styles from './Sidebar.module.css';

export const Sidebar = (props) => {
	return (
		<aside className={styles.sidebar}>
			<img
				className={styles.cover} 
				src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
			/>

			<div className={styles.profile}>

				<img 
					className={styles.avatar} 
					src="https://github.com/eoisaac.png"
				/>

				<strong className={styles.username}> 
					Isaac Santiago
				</strong>
				<span className={styles.usertitle}> 
					Web developer 
				</span>
			</div>
		
			<footer className={styles.footer}>
				<a className={styles.button} href="#">
					<PencilLine size={20}/>
					Editar perfil
				</a>
			</footer>
		</aside>
	);
};