import {useState, useEffect} from React;
import axios from "axios";
import styles from PostList.module.css;
// отображение постов 
const [posts, setPost] = useState([]);
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

    useEffect(() => {
        fetchPosts();
    },[]);

    if (loading) return <p>Загрузка...</p>
    if (error) return <p>{error}</p>
    // если загрузка завершена и ошибок нет 
return (
    <div>
<ul>
{posts.map((post) => (
<li key={post.id}>
<h3>{post.title}</h3>
<p>{post.body}</p>
</li>
))}
</ul>
    </div>
)
}

export default PostList;




