import styles from './App.module.css'
import { Taskbar } from './modules/Taskbar'
// import { TaskCreated } from './modules/TaskCreated'
import { TaskFinished } from './modules/TaskFinished'



export function App(){
    return(
        <html>
        <body >
            <div className={styles.backgroundHeader}>
                <img src="src\imgs\notebook.png" alt="notebook" />
                    <p>To</p>
                    <p>Do</p>
            </div>

            <div className={styles.backgroundBody}>
                <div className={styles.backgroundTaskbar}>
                    <Taskbar/>
                </div>

                <div>
                </div>
            </div>
        </body>
        <aside>
            <div className={styles.backgroundSideLeft}>a</div>
            <div className={styles.backgroundSideRight}>a</div>
        </aside>
        </html>
    )
}