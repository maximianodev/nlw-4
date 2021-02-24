import Head from 'next/head';
import React from 'react';
import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import Profile from '../components/Profile';
import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Inicio | move.it</title>
            </Head>
            <ExperienceBar />
            <section>
                <div className={styles.leftContainer}>
                    <Profile />
                    <CompleteChallenges />
                    <Countdown />
                </div>
                <div className={styles.rightContainer}>
                </div>
            </section>
        </div>
    );
}