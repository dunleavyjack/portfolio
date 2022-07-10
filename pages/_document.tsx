import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    rel="preconnect"
                    href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600;700;800;900&display=swap"
                />
                <Script
                    id="Tween Max"
                    src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
                    strategy="beforeInteractive"
                />
                <Script
                    id="Leon Sans"
                    src="../assets/js/leon.js"
                    strategy="beforeInteractive"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
