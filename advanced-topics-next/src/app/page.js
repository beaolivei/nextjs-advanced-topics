import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1> Hello, world 👋 </h1>
      <h2> I am Bea 🌈 I am a developer and in this page I share my thoughts around tech and programming!</h2>
      <Image
        src="/profile.jpg"
        width="300"
        height="400"
        />
    </main>
  );
}
