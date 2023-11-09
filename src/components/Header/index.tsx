import { Link } from '../Link'

import logo from '../../assets/logo.png'
import styles from './styles.module.scss'
import { MenuHamburger } from '../MenuHamburger'

type HeaderProps = {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <header className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles['logo-container']}>
          <MenuHamburger />

          <Link to='/'>
            <img src={logo} alt="Logo Ipsum" />
          </Link>
        </div>

        <h1 className={styles.title}>{title}</h1>
      </div>
    </header>
  )
}