import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
    const hasActiveChallange = true;
    return (
        <div className={styles.container}>
            {hasActiveChallange ? (
                <div className={styles.active}>
                    <header>Ganhe 400xp</header>
                    <main>
                        <img src="icons/body.svg" alt="" />
                        <strong>Novo desafio</strong>
                        <p>Levante e faça uma caminhada</p>
                    </main>
                    <footer>
                        <button type="button" className={styles.failedButton}>
                            Falhei
                        </button>
                        <button type="button" className={styles.succeededButon}>
                            Complete
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
