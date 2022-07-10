import { useState, useEffect } from 'react';

export const useScrollHeight = (): number => {
    const [scrollHeightY, setScrollHeightY] = useState<number>(0);
    const handleScroll = () => setScrollHeightY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    });

    return scrollHeightY;
};
