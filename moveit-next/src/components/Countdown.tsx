import { useState, useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css';

let countDownTimeOut: NodeJS.Timeout;

export function Countdown() {
    const [time, setTime] = useState(0.1 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('');
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('');

    function startCountDown() {
        setIsActive(true);
    }
    function resetCountDown() {
        clearTimeout(countDownTimeOut);
        setIsActive(false);
        setTime(0.1 * 60);
    }

    useEffect(() => {
        if (isActive && time > 0) {
            countDownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time == 0) {
            setHasFinished(true);
            setIsActive(false);
        }
    }, [isActive, time]);

    return (
        <div>
            <div className={styles.container}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    disabled
                    type="button"
                    className={styles.startButton}
                    onClick={() => resetCountDown()}
                >
                    Ciclo encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            type="button"
                            className={`${styles.startButton} ${styles.countdownButtonActive}`}
                            onClick={() => resetCountDown()}
                        >
                            Abandonar ciclo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className={styles.startButton}
                            onClick={() => startCountDown()}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}
