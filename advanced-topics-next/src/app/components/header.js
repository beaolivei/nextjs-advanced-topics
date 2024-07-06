import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <Link href="/">
        <p> MY APP</p>
      </Link>
      <div className={styles.linkWrap}>
      <Link href="/posts">
        <p> MY POSTS</p>
      </Link>
      <Link href="/posts/add-post">
        <p> ADD NEW POST</p>
      </Link>
      </div>
    </div>
  );
};

export default Header;
