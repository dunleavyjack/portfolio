import type { NextPage } from 'next';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NameAnimation from '../components/NameAnimation';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <>
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
                    <h3 className={styles.instruction}>SCROLL</h3>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={4.5} className={styles.page}>
                    <h1 className={styles.title}>
                        Full Stack <br /> Developer
                    </h1>
                    <section>
                        <p className={styles.description}>
                            My name is Jack, a software engineer building
                            responsive, professional, and creative web
                            applications with{' '}
                            <span className={styles.underline}>React</span>,{' '}
                            <span className={styles.underline}>Redux</span>,{' '}
                            <span className={styles.underline}>MongoDB</span>,
                            and{' '}
                            <span className={styles.underline}>Node.js</span>.
                            I’m focused on interaction, performance, and an
                            empathy-driven user experience.
                        </p>
                        <div className={styles.linkContainer}>
                            <Link href="/projects">
                                <a className={styles.link}>PROJECTS</a>
                            </Link>
                            <Link href="/work">
                                <a className={styles.link}>WORK</a>
                            </Link>
                            <Link href="/me">
                                <a className={styles.link}>ME</a>
                            </Link>
                            <div className={styles.loops}>
                                <Image
                                    alt="Loop design"
                                    layout="fixed"
                                    src={'/assets/images/loops.svg'}
                                    height={'45px'}
                                    width={'175px'}
                                />
                            </div>
                        </div>
                    </section>
                </ParallaxLayer>
            </Parallax>
        </>
    );
};

export default Home;
