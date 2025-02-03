import fetchPosts from "./PostList"

function App() {
  return (
    <div className={styles.wrapper}>
      <h2>О разных странах</h2>
      <fetchPosts />
    </div>
  );
}

export default App;
