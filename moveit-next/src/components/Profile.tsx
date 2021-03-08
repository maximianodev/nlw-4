import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContexts';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/sr-max.png" alt="profile" />
            <div>
                <strong>SrMax</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                   Level {level}
                </p>
            </div>
        </div>
    )
};
