import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Card from './components/Card';

function App() {
  const [photo, setPhoto] = useState();
  // const [userName, setUserName] = useState();
  // const [photoUrlSm, setPhotoUrlSm] = useState();
  // const [photoDate, setPhotoDate] = useState();
  // const [photoLikes, setPhotoLikes] = useState();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('https://api.unsplash.com/photos?client_id=B12PstzUWrwhlWL7XUlHpblLuXqHbtBPBJBkaV5Kh_Q');
      const data = await res.json();
      console.log(data);
      // setUserName(data.user.name);
      // setPhotoUrlSm(data.urls.small);
      // setPhotoDate(data.created_at.split('T')[0]);
      // setPhotoLikes(data.likes);
      setPhoto(data[0]);
    }
    fetchData();
  });
  
  return (
    <div className={styles.app}>
      <div className={styles.cardsWrapper}>
        <Card 
          // userName={userName}
          // urlImg={photoUrlSm}
          // dateImg={photoDate}
          // countLikes={photoLikes}
          userName={photo.user.name}
        />
      </div>
    </div>
  );
}

export default App;
