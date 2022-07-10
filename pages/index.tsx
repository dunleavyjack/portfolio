import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NameAnimation from '../components/NameAnimation';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <Parallax pages={2} style={{ top: '0', left: '0' }}>
            <ParallaxLayer
                offset={0}
                speed={2.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <NameAnimation />
                <h3 className={styles.scrollText}>SCROLL</h3>
            </ParallaxLayer>

            <ParallaxLayer
                offset={1}
                speed={2}
                style={{ backgroundColor: 'black' }}
            />

            <ParallaxLayer
                offset={1}
                speed={0.5}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    textAlign: 'center',
                    alignItems: 'center',
                    color: 'gray',
                }}
            >
                <h1 style={{ color: 'white' }}>Nice to meet you.</h1>
                <h2 style={{ color: 'white' }}>
                    Im a full-stack developer building responsive, professional,
                    and creative web applications using React, Redux, Figma, and
                    Node.js.
                </h2>
                <h2 style={{ color: 'white' }}>
                    I try to be creative, efficient, and design-oriented.
                </h2>
            </ParallaxLayer>
        </Parallax>
    );
};

export default Home;
