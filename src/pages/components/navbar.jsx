import Link from 'next/link';
import { FaFacebook, FaFacebookMessenger, FaHome, FaUsers } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react'
import { Nav, NavDropdown } from 'react-bootstrap';
import styles from '../../styles/Navbar.module.css';

const navbar = () => {
    const { data: session } = useSession()


  return (
    <div className="container-fluid">
       <nav className={styles.navbar}>
       <ul className='header-menu nav'>
        <Link className={styles.logo} href="/facebook">
          <FaFacebook className={styles.fblogo} />
          <span className={styles.fbtext}>Facebook</span>
        </Link>


    <li className={styles.navlist}>
      <Link className={styles.navitem} href="/home" >
        <FaHome />
        <span className={styles.navtext}>Home</span>
      </Link>
    </li>

    <li className={styles.navlist}>
      <Link className={styles.navitem} href="/messages">
        <FaFacebookMessenger />
        <span className={styles.navtext}>Messages</span>
      </Link>
    </li>

    <li className={styles.navlist}>
      <Link className={styles.navitem} href="/friends">
        <FaUsers />
        <span className={styles.navtext}>Friends</span>
      </Link>
    </li>

    <Nav.Item>
      <img className={styles.profile} src={session.user.image} />
    </Nav.Item>


      <NavDropdown className="ml-auto mt-auto" title={`Welcome, User`} id="basic-nav-dropdown ">
        <NavDropdown.Item href="/user/profile"><i className="icon-cog"></i> Profile</NavDropdown.Item>
        <NavDropdown.Item href="/help/photos"><i className="icon-envelope"></i> Photos</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/auth/signout" onClick={signOut}>Sign Out</NavDropdown.Item>
      </NavDropdown>

  </ul>
</nav>


    </div>
  );
};

export default navbar;