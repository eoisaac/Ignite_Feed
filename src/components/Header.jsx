import styles from './Header.module.css';
import igniteLogo from '../assets/ignite-logo.svg'

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={styles.title}>
				<img src={igniteLogo} alt="Ignite logo"/>
			</h1>
		</header>
	);
};
