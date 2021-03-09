import Head from 'next/head';
import React from 'react';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { CountdownProvider } from '../contexts/CountdownContext'

import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inicio | move.it</title>
            </Head>
            <ExperienceBar />
            <CountdownProvider>
                <section>
                    <div className={styles.leftContainer}>
                        <Profile />
                        <CompleteChallenges />
                        <Countdown />
                    </div>
                    <div className={styles.rightContainer}>
                        <ChallengeBox />
                    </div>
                </section>
            </CountdownProvider>
        </div>
    );
}

export const getServerSideProps = async () => {
    return {
        props: {
            
        }
    }
}