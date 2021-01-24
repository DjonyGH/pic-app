import styles from './card.module.css';

function Card(props) {
    const {userName, userUrl, urlImg, dateImg, countLikes} = props;
    return (
        <div className={styles.card}>
            <div className={styles.userName}>
                <a href={userUrl} className={styles.userUrl} rel="noreferrer" target="_blank">{userName}</a>
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