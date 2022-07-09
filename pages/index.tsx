import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import NameAnimation from '../components/NameAnimation';

const Home: NextPage = () => {
    return (
        <main>
            <NameAnimation />
            <span
                style={{
                    position: 'absolute',
                    bottom: '15px',
                    width: '100vw',
                    textAlign: 'center',
                }}
            >
                <Image
                    src="/assets/images/down-arrow.svg"
                    alt="Down"
                    width={30}
                    height={30}
                />
            </span>

            <section className={styles.intro}></section>
        </main>
    );
};

export default Home;
