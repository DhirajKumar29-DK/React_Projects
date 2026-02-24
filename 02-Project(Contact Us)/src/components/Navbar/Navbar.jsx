import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className='logo'>
        <img src="/images/logo (1).png" alt="Do some coding logo" />
      </div>

      <ul>
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  )
}

export default Navbar
