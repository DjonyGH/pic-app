import styles from './card.module.css';

function Card(props) {
    const {id, userName, userUrl, isLiked, urlImg, dateImg, countLikes} = props;

    const liking = async () => {
        if (!isLiked) {
            const res = await fetch(`https://api.unsplash.com/photos/:${id}/like?code=B12PstzUWrwhlWL7XUlHpblLuXqHbtBPBJBkaV5Kh_Q`, {
                method: 'POST'
            });
            const data = await res.json();
            console.log(data);
        } else {

        }
    }

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
                <button 
                    className={styles.likes}
                    onClick={liking}
                >
                    {countLikes}
                </button>
            </div>

        </div>
    );
}

export default Card;