import styles from './Header.module.css';

export const Header = () => {
	console.log(styles);

	return (
		<h1 className={styles.header}>Header</h1>
	);
};
