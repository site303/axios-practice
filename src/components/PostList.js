import {useState, useEffect} from "react";
import axios from "axios";


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
    } catch(err) {
        setError("Ошибка загрузки данных");
        // останавливает индикатор загрузки 
        setLoading(false);
    }
};

useEffect(() => {
    fetchPosts();
},[]);

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>
    // если загрузка завершена и ошибок нет 
return (
    <div>
    <h2>Список постов</h2>
    <ul>
      {posts.map((post) => (
      <li key={post.name.common}>
         {/* Название страны */}
      <h3>{post.name.common}</h3> 
      {/* Столица */}
      <p>Столица: {post.capital ? post.capital[0] : "Нет данных"}</p> 
      {/* Флаг */}
      <img src={post.flags.png} alt={`Флаг ${post.name.common}`} width="100" /> 
    </li>
      ))}
    </ul>
  </div>
)

 }


export default PostList;




