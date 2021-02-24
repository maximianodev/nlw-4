import React from 'react';
import styles from '../styles/components/CompleteChallenges.module.css'

interface Props {}

export const CompleteChallenges = (props: Props) => {
    return (
        <div className={styles.completedChallengeContainer}>
            <span>Desafios completos</span>
            <span>5</span>
        </div>
    );
};
