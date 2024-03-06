import styles from './Header.module.css'

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/">
                <span>ELENCO 2023</span>
            </Link>
            <nav>
                <Link to="/">Titulares</Link>
                <Link to="/Reservas">Reservas</Link>
                <Link to="/NaoRelacionados">Nao Relaciondos</Link>
            </nav>
        </header>
    )
}
export default Header