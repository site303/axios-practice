import { useState, useEffect } from "react";
import axios from "axios";
import Tabs from "./Tabs";
import styles from "./PostList.module.css";

const PostList = () => {
  // отображение постов
  const [posts, setPosts] = useState([]);
  // отображение статуса загрузки
  const [loading, setLoading] = useState(true);
  // ошибка
  const [error, setError] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      setPosts(response.data);
      // завершаем загрузку; скрывает индикатор загрузки
      setLoading(false);
    } catch (err) {
      setError("Ошибка загрузки данных");
      // останавливает индикатор загрузки
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;
  // если загрузка завершена и ошибок нет
  return (
    <div className={styles.postList}>
      <Tabs posts={posts} />
    </div>
  );
};

export default PostList;
