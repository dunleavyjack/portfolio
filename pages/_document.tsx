import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
    return (
        <Html>
            <Head>
                {/* ---- Fonts ---- */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
                    rel="stylesheet"
                />

                {/* ---- Name Animation Scripts ---- */}
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
