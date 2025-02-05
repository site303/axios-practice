import PostList from "./components/PostList";
import styles from "./components/PostList.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
      <h2>О разных странах</h2>
      <PostList />
      </div>
    </div>
  );
}

export default App;

