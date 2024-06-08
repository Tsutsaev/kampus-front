import styles from './groups.module.scss'
import About  from '../../assets/about.svg?react'
const Groups = () => {
  return (
    <div className={styles.groups_main}>
      <div className={styles.groups_title}>GROUPS</div>
      <div className={styles.groups}>
            <About/>
        <div className={styles.group}>
            <div className={styles.chat_line_top}>
            <div className="groups_name">Friends Forever</div>
            <div className="counter">Today, 9.52pm</div>
            </div>
            <div className={styles.chat_line_bottom}>
              <div>Hello</div>
              <div>23</div>
            </div>
        </div>
    </div>
      <div className={styles.groups}>
            <About/>
        <div className={styles.group}>
            <div className={styles.chat_line_top}>
            <div className="groups_name">Friends Forever</div>
            <div className="counter">Today, 9.52pm</div>
            </div>
            <div className={styles.chat_line_bottom}>
              <div>Hello</div>
              <div>23</div>
            </div>
        </div>
    </div>
      <div className={styles.groups}>
            <About/>
        <div className={styles.group}>
            <div className={styles.chat_line_top}>
            <div className="groups_name">Friends Forever</div>
            <div className="counter">Today, 9.52pm</div>
            </div>
            <div className={styles.chat_line_bottom}>
              <div>Hello</div>
              <div>23</div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Groups