import styles from './style.module.scss'


export default function index(){
    return(

        <div className={styles.container}>

            <div className = {styles.textContainer}>

                <p className={styles.text}>
                    Hello
                </p>
            </div>
        </div>
    )
}