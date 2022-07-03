import React from 'react'
import styles from "./Message.module.css"

function Message(props: any) {
    return (
        <div className={styles.message}>

                <div className={styles.avaWrapper}><img src={props.avatar} alt="" className={styles.avatar}/></div>
                <div className={styles.letter}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>{props.name}</h2>
                        <p className={styles.text}>{props.message}</p>
                    </div>
                    <div className={styles.time}>{props.time}</div>
                </div>
            </div>

    )
}

export default Message
