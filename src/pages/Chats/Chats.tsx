import Groups from '../Groups/Groups'
import Header from '../Header/Header'
import People from '../People/People'
import styles from './chats.module.scss'

const Chats = () => {
  return (
    <div className={styles.chats}>
        <Header/>
        <Groups/>
        <People/>
    </div>
  )
}

export default Chats
