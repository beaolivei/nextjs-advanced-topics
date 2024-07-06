import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello, world! 👋</h1>
      <h2>
        I am Bea 👌 😎 I am developer and in this blog I share my thoughts and
        ideas!
      </h2>
      <Image
        src="/profile.jpg"
        width="300"
        height="400"
        alt="A photo of Bea in the Louvre Pyramides"
      />
    </main>
  );
}
