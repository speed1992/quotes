import React, { useState } from "react";
import styles from "./sign-in-modal.module.css";

export const SignInModal = ({ setModalVisible, setMarkedMode }) => {

    const [userName, setUserName] = useState('');

    const signInUser = () => {
        //if api success
        fetch("https:localhost:3000").then((response) => response.json())
            .then((response) => {
                setMarkedMode(true);
                setModalVisible(false);
            })
    }

    return (
        <div className={styles.fullScreenWidth}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <label>
                        Mobile Number:
                        <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    </label>
                    <div>
                        <button onClick={signInUser}>Sign In</button>
                        <button className={styles.closeButton} onClick={() => setModalVisible(false)}>X</button>
                    </div>
                </div>
            </div>
        </div>

    )
}
