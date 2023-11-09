import { Link } from 'react-router-dom'

import logo from '../../assets/logo.png'
import styles from './styles.module.scss'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['logo-container']}>
        <button
          type="button"
          aria-label='Menu Hamburger'
          style={{
            border: 0,
            cursor: 'pointer'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
            <path d="M1.34375 4.44531H21.6562C22.0877 4.44531 22.4375 4.09556 22.4375 3.66406V1.71094C22.4375 1.27944 22.0877 0.929688 21.6562 0.929688H1.34375C0.912256 0.929688 0.5625 1.27944 0.5625 1.71094V3.66406C0.5625 4.09556 0.912256 4.44531 1.34375 4.44531ZM1.34375 12.2578H21.6562C22.0877 12.2578 22.4375 11.9081 22.4375 11.4766V9.52344C22.4375 9.09194 22.0877 8.74219 21.6562 8.74219H1.34375C0.912256 8.74219 0.5625 9.09194 0.5625 9.52344V11.4766C0.5625 11.9081 0.912256 12.2578 1.34375 12.2578ZM1.34375 20.0703H21.6562C22.0877 20.0703 22.4375 19.7206 22.4375 19.2891V17.3359C22.4375 16.9044 22.0877 16.5547 21.6562 16.5547H1.34375C0.912256 16.5547 0.5625 16.9044 0.5625 17.3359V19.2891C0.5625 19.7206 0.912256 20.0703 1.34375 20.0703Z" fill="#2B7D83" />
          </svg>
        </button>

          <Link to='/'>
            <img src={logo} alt="Logo Ipsum" />
          </Link>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  )
}