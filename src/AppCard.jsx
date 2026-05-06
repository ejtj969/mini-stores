import styles from './AppCard.module.css'


export function AppCard({image, title, text, tags}){
    return (
      <section className={styles.card}>
        <img src={image}/>
        <h2>{title}</h2>
        <p>{text}</p>
        <div className={styles.tag_container}>
          {tags.map((tag) => 
          <div className={styles.tag}>{tag}</div>
          )}
        </div>
      </section>
    )
}