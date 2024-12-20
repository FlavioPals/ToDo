import styles from './TaskFinished.module.css'

interface props {
    number1: number,
    number2: number
}

export function TaskFinished({number1, number2}: props) {
    return (
        <div className={styles.taskFinished}>
            <p>Task Finished</p>
            <p>{number1} of {number2}</p>
        </div>
    );
}