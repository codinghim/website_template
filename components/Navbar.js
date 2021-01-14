import Link from 'next/link'
import Styles from './styles/navbar.module.scss'

const Navbar = () => {
    return(
        <>
        <nav className={Styles.nav}>
            <Link href="/">
                <a className={Styles.navLink}>Home</a>
            </Link>
            <div className={Styles.navLink_container}>
                <Link href="/about">
                    <a className={Styles.navLink}>About</a>
                </Link>
                <Link href="/">
                    <a className={Styles.navLink}>Link 2</a>
                </Link>
                <Link href="/">
                    <a className={Styles.navLink}>Link 3</a>
                </Link>
            </div>
            <a href="#contact" className={Styles.navLink}>
                Contact
            </a>
            
        </nav>
        </>
    )
}

export default Navbar;