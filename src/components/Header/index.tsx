import styles from './styles.module.scss';

export function Header() {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.containerLogo}>
          <h1>TECNOBLOG</h1>
        </div>
        <div>
          <ul>
            <li>teste</li>
            <li>teste</li>
            <li>teste</li>
          </ul>
        </div>
      </header>
    </>
  )
}