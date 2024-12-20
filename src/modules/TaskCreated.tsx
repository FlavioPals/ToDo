import styles from './TaskCreated.module.css'

interface props {
    tasks: number
}


export function TaskCreated({tasks}:props) {
    

    return (
        <div className={styles.taskCreated}>
            <p>Task Created</p>
            <p>{tasks}</p>
        </div>
    );
}