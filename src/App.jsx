import './variables.css'
import styles from './App.module.css'
import {AppCard} from './AppCard'


export default function App() {
  return (
    <>
      <body>
        <header>
          <h1 className={styles.header}>MiniStore</h1>
        </header>

        <main>
          {[
            {image: '/Product1.png', title: 'Product1', text: 'Some very cool description about Product1, also it is very very very very very very very long. Yeah it is definetely helpul huh? U rly still reading this? You are better doing... Oh, cutoff, see ya! man rly? why are you reading this XD Go get some sleep', tags: ['tag1', 'tag2']},
            {image: '/Product2.png', title: 'Product2', text: 'Text2', tags: ['tag1', 'tag2', 'tag3', 'looong tag']},
            {image: '/Product1.png', title: 'Product3', text: 'Text3', tags: ['tg', 'tag4']},
            {image: '/Product1.png', title: 'Product4', text: 'Text4', tags: ['tag5']},
            {image: '/Product1.png', title: 'Product5', text: 'Text5', tags: ['tag6', 'tag7', 'tag8', 'tag9', 'tag10']},
            {image: '/Product1.png', title: 'Product6', text: 'Text6', tags: ['tag11', 'tag12', 'tag13']},
            {image: '/Product1.png', title: 'Product7', text: 'Text7', tags: ['tag14', 'tag15']},
            {image: '/Product1.png', title: 'Product8', text: 'Text8', tags: ['tag16']},
            {image: '/Product1.png', title: 'Product9', text: 'Text9', tags: ['tag17', 'tag18', 'tag19', 'tag20']}
          ].map(({image, title, text, tags}) => (
          <AppCard
            image={image}
            title={title}
            text={text}
            tags={tags}
          />
          ))}
        </main>
      </body>
    </>
  );
}
