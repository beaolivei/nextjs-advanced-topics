import Link from "next/link";
import styles from "./header.module.css";
const Header = () => {
  return (
    <div className={styles.headerWrap}>
      <Link href="/">
      <p> MY BLOG</p>
      </Link>

      <div className={styles.linkWrapper}>
        <Link href="/posts/add-post">
            <button> ADD POST </button>
        </Link>
        <Link href="/posts">
            <p> MY POSTS </p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
