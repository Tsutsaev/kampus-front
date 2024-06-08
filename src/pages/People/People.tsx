import styles from './people.module.scss'
import  About  from '../../assets/about.svg?react'

const People = () => {
  return (
    <div className={styles.people_main}>
    <div className={styles.people_title}>People</div>
    <div className={styles.people}>
          <About/>
      <div className={styles.group}>
          <div className={styles.chat_line_top}>
          <div className="people_name">Friends Forever</div>
          <div className="counter">Today, 9.52pm</div>
          </div>
          <div className={styles.chat_line_bottom}>
            <div>Hello</div>
            <div>23</div>
          </div>
      </div>
  </div>
    <div className={styles.people}>
          <About/>
      <div className={styles.group}>
          <div className={styles.chat_line_top}>
          <div className="people_name">Friends Forever</div>
          <div className="counter">Today, 9.52pm</div>
          </div>
          <div className={styles.chat_line_bottom}>
            <div>Hello</div>
            <div>23</div>
          </div>
      </div>
  </div>
    <div className={styles.people}>
          <About/>
      <div className={styles.group}>
          <div className={styles.chat_line_top}>
          <div className="people_name">Friends Forever</div>
          <div className="counter">Today, 9.52pm</div>
          </div>
          <div className={styles.chat_line_bottom}>
            <div>Hello</div>
            <div>23</div>
          </div>
      </div>
  </div>
    <div className={styles.people}>
          <About/>
      <div className={styles.group}>
          <div className={styles.chat_line_top}>
          <div className="people_name">Friends Forever</div>
          <div className="counter">Today, 9.52pm</div>
          </div>
          <div className={styles.chat_line_bottom}>
            <div>Hello</div>
            <div>23</div>
          </div>
      </div>
  </div>
    <div className={styles.people}>
          <About/>
      <div className={styles.group}>
          <div className={styles.chat_line_top}>
          <div className="people_name">Friends Forever</div>
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

export default People