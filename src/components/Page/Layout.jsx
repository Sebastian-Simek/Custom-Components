import { Outlet } from 'react-router-dom';
import styles from './Layout.css';

export default function Layout() {
  return (
    <div className={styles.Layout}>
      <main className={styles.Main}>
        <Outlet />
      </main>
    </div>
  );
}
