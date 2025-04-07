import { useState } from 'react';
import styles from './PostList.module.css';

const Tabs = ( {posts} ) => {

    // при клике на таб будет отображаться интересующий контент 
const [activeTab, setActiveTab] = useState(0);

if (!posts || posts.length === 0) return <p>Нет данных для отображения</p>;

// для табов, чтобы можно было листать направо и налево
function handlePrevTab() {
    if (activeTab > 0) {
        setActiveTab(prev => prev - 1);
    }
}

function handleNextTab() {
    if (activeTab < posts.length - 1) {
        setActiveTab(prev => prev + 1)
    }
}
// 

const currentPost = posts[activeTab];

return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabContent}>
        <h3>{currentPost.name.common}</h3>
        <p>Столица: {currentPost.capital ? currentPost.capital[0] : "Нет данных"}</p>
        <img 
          src={currentPost.flags.png} 
          alt={`Флаг ${currentPost.name.common}`} 
          width="100" 
        />
      </div>
      <div className={styles.buttons}>
        <button 
          onClick={handlePrevTab} 
          disabled={activeTab === 0}
          className={styles.button}
        >
          ◀️ 
        </button>
        <button 
          onClick={handleNextTab} 
          disabled={activeTab === posts.length - 1}
          className={styles.button}
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default Tabs;