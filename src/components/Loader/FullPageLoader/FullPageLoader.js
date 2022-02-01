import styles from './FullPageLoader.module.css';
import Spinner from 'react-bootstrap/Spinner';

export default function FullPageLoader() {
  return (
    <div className={styles.loaderWrapper}>
      <Spinner animation="border" role="status" className="mx-auto">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
