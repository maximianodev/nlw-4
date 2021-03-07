import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContexts';
import styles from '../styles/components/CompleteChallenges.module.css'

interface Props { }

export const CompleteChallenges = (props: Props) => {
    const { challengesCompleted } = useContext(ChallengesContext)
    return (
        <div className={styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
};
