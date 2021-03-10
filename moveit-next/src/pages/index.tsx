import Head from 'next/head';
import React from 'react';
import { GetServerSideProps } from "next"

import { ChallengesProvider } from '../contexts/ChallangesContexts'

import { CompleteChallenges } from '../components/CompleteChallenges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from '../components/ExperienceBar';
import { CountdownProvider } from '../contexts/CountdownContext'

import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';
import styles from '../styles/pages/Home.module.css';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <ChallengesProvider
            level={props.level}
            currentExperience={props.currentExperience}
            challengesCompleted={props.challengesCompleted}
        >
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
        </ChallengesProvider>
    );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { level, currentExperience, challengesCompleted } = ctx.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted)
        }
    }
}