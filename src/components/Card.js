import styles from './card.module.css';

function Card(props) {
    const {userName, urlImg, dateImg, countLikes} = props;
    return (
        <div className={styles.card}>
            <div className={styles.userName}>
                {userName}
            </div>
            <img className={styles.picSmall} src={urlImg} alt="pic"/>
            <div className={styles.info}>
                <div className={styles.date}>
                    {dateImg}
                </div>
                <button className={styles.likes}>
                    {countLikes}
                </button>
            </div>

        </div>
    );
}

export default Card;