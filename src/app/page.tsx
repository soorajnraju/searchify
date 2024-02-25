import SearchBar from "./components/searchbar";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <SearchBar />
    </div>
  );
}
