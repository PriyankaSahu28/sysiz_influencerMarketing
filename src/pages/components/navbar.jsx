import Link from "next/link";
import { FaFacebookMessenger, FaHome, FaUsers } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import styles from "../../styles/Navbar.module.css";

const navbar = () => {
  const { data: session } = useSession();
  function getSession() {
    const session = localStorage.getItem("session");
    console.log("hello " + session);
    return session ? JSON.parse(session) : null;
  }

  return (
    <Navbar bg="light" expand="lg" style={{ height: "1%" }}>
      <Container>
        {/* <nav className={styles.navbar}> */}
        <Navbar.Brand>
          <Link className={styles.logo} href="/sysiz">
            <img className={styles.sysiz} src="/images/sysiz.jpg" />
            <span className={styles.fbtext}>Sysiz</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle className="mt-auto" aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className={styles.navitem} href="/home">
              <FaHome />
              <span className={styles.navtext}>Home</span>
            </Link>

            <Link className={styles.navitem} href="/messages">
              <FaFacebookMessenger />
              <span className={styles.navtext}>Messages</span>
            </Link>

            <Link className={styles.navitem} href="/friends">
              <FaUsers />
              <span className={styles.navtext}>Friends</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <img
        className={styles.profile}
        src={getSession().user.image}
        alt={session.user.name}
      />
      <NavDropdown
        className="ml-auto mt-auto "
        id="basic-nav-dropdown "
        title={`Welcome, ${session.user.name}`}
      >
        <NavDropdown.Item href="/user/profile">
          <i className="icon-cog"></i> Profile
        </NavDropdown.Item>
        <NavDropdown.Item href="/help/photos">
          <i className="icon-envelope"></i> Photos
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="/auth/signout" onClick={signOut}>
          Sign Out
        </NavDropdown.Item>
      </NavDropdown>
    </Navbar>
  );
};

export default navbar;
