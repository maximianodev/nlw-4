import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContexts';

import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {

    const { activeChallenge, resetChallenge } = useContext(ChallengesContext)

    return (
        <div className={styles.container}>
            {activeChallenge ? (
                <div className={styles.active}>
                    <header>Ganhe {activeChallenge.ammount}</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                            type="button" 
                            className={styles.failedButton}
                            onClick={resetChallenge}
                            >
                            Falhei
                        </button>
                        <button type="button" className={styles.succeededButon}>
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.notActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg" alt="level-up" />
                        Avance de nivel completando desafios
                    </p>
                </div>
            )}
        </div>
    );
}
