import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Card from './components/Card';

function App() {
  const [photos, setPhotos] = useState([]);
  const [countPerPages, setCountPerPages] = useState(10);



  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://api.unsplash.com/photos?per_page=${countPerPages}&client_id=B12PstzUWrwhlWL7XUlHpblLuXqHbtBPBJBkaV5Kh_Q`);
      const data = await res.json();
      console.log(data);
      setPhotos(data);
    }
    fetchData();
  }, [countPerPages]);
  
  return (
    <div className={styles.app}>
      <div className={styles.header}>
        <button
          className={styles.loadMore}
          onClick={() => setCountPerPages(countPerPages + 10)}
        >
          Загрузить еще
        </button>
      </div>
      <div className={styles.cardsWrapper}>
        {photos.map(photo => (
          <Card
            key={photo.id}
            id={photo.id}
            userName={photo.user.name}
            userUrl={photo.user.links.html}
            urlImg={photo.urls.small}
            dateImg={photo.created_at.split('T')[0]}
            countLikes={photo.likes}
            isLiked={photo.liked_by_user}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
