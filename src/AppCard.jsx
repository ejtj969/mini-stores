import styles from './AppCard.module.css'


export function AppCard({title, text, date}){
    return (
            <section className={styles.card}>
              <h2>{title}</h2>
              <p>{text}</p>
              <span>{date}</span>
            </section>
    )
}