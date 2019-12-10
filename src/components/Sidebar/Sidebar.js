import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "gatsby";

const ListLink = props => (
  <li>
    <Link
      to={props.to}
      style={props.style}
      className={props.active ? styles.active : ""}
    >
      {props.children}
    </Link>
  </li>
);

class Sidebar extends React.Component {
  render() {
    return (
      <aside className={styles.sidebar}>
        <img
          style={{
            width: 130,
            height: 130,
            borderRadius: 130
          }}
          src="http://www.farbodrafezy.com/images/me.jpg"
          alt="Farbod Rafezy"
        ></img>
        <h3 style={{ fontSize: 28 }}>Farbod Rafezy</h3>
        <p>
          4th year Computer Science student at UCI; incoming Software Engineer
          at Google; little fish in a big pond.
        </p>
        <ul className={styles.menuList}>
          <ListLink to="/" active={this.props.active === "portfolio"}>
            Portfolio
          </ListLink>
          <ListLink to="/blog" active={this.props.active === "blog"}>
            Blog
          </ListLink>
          <ListLink to="/about" active={this.props.active === "about"}>
            About me
          </ListLink>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
