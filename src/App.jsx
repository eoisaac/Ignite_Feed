import './global.css';
import styles from './App.module.css';

import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './Post';

export const App = () => {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>

        <Sidebar />

        <main>
          <Post
            author="Isaac"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo corrupti atque dolores, minima vel eligendi reiciendis soluta nam saepe quo ab optio? Ipsum deserunt cum assumenda sequi maiores. Magni, natus."
          />
          <Post author="Gui" content="Lorem ipsum preguiçoso" />
        </main>
      </div>
    </>
  );
};
