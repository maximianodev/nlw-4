import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallangesContexts';
import { CountdownContext } from '../contexts/CountdownContext';

import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {

    const { activeChallenge, resetChallenge, completChallenge } = useContext(ChallengesContext)
    const { resetCountDown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completChallenge()
        resetCountDown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountDown()
    }

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
                            onClick={handleChallengeFailed}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={styles.succeededButon}
                            onClick={handleChallengeSucceeded}
                        >
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
