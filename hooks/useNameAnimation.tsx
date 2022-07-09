import { useEffect } from 'react';

export const useNameAnimtion = () => {
    useEffect(() => {
        /**
         *
         * !Important. I'm still working on the types declarations in this file.
         *
         * Both the animation below and font come from a custom sans-serif font and animation system
         * called Leon Sans that was created by Jongmin Kim, whose work is absolutely incredible: https://leon-kim.com/
         *
         * There's no npm package for Leon Sans, but Jongmin Kim hosts it on a public github (https://github.com/cmiscm/leonsans),
         * so I am injecting that code into this project using a Next.js script component with a custom document
         * at /pages/_document.tsx. Since that code is added to the page window, I also added types to extend
         *
         */
        let leon: any, canvas: any, ctx: any;

        const sw = '800';
        const sh = '400';
        const pixelRatio = 2;

        const init = () => {
            canvas = document.createElement('canvas');
            const referenceNode =
                document.getElementsByClassName('reference-node')[0];
            const parentNode =
                document.getElementsByClassName('parent-node')[0];

            parentNode.insertBefore(canvas, referenceNode);
            ctx = canvas.getContext('2d');
            canvas.width = Number(sw) * pixelRatio;
            canvas.height = Number(sh) * pixelRatio;
            canvas.style.width = '100vw';
            canvas.style.height = sh;
            ctx.scale(pixelRatio, pixelRatio);

            leon = new window.LeonSans({
                text: 'Jack Dunleavy',
                color: ['#000000'],
                size: 100,
                weight: 500,
            });

            requestAnimationFrame(animate);

            let i,
                total = leon.drawing.length;
            for (i = 0; i < total; i++) {
                window.TweenMax.fromTo(
                    leon.drawing[i],
                    1.6,
                    {
                        value: 0,
                    },
                    {
                        delay: i * 0.05,
                        value: 1,
                        ease: window.Power4.easeOut,
                    }
                );
            }
        };

        const animate = (t: any) => {
            requestAnimationFrame(animate);

            ctx.clearRect(0, 0, sw, sh);

            const x = (800 - leon.rect.w) / 2;
            const y = (400 - leon.rect.h) / 2;
            leon.position(x, y);

            leon.draw(ctx);
        };

        init();
    }, []);
};
