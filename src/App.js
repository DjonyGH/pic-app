import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Card from './components/Card';

function App() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.unsplash.com/photos?client_id=B12PstzUWrwhlWL7XUlHpblLuXqHbtBPBJBkaV5Kh_Q');
      const data = await res.json();
      console.log(data);
      setPhotos(data);
    }
    fetchData();
  }, []);
  
  return (
    <div className={styles.app}>
      <div className={styles.cardsWrapper}>
        {photos.map(photo => (
          <Card
            userName={photo.user.name}
            urlImg={photo.urls.small}
            dateImg={photo.created_at.split('T')[0]}
            countLikes={photo.likes}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
