import styles from './App.module.css';

import Card from './components/Card'

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.cardsWrapper}>
        <Card 
          userName="djony"
          urlImg="/img/forest.jpg"
          dateImg="12.12.2020"
          countLikes="500"
        />
      </div>
    </div>
  );
}

export default App;
