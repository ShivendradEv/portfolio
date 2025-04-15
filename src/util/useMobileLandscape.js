import { useEffect, useState } from 'react';

export const useMobileLandscape = () => {
    const [isMobileLandscape, setIsMobileLandscape] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            const isMobile = window.innerWidth <= 991;
            const isLandscape = window.innerWidth > window.innerHeight;
            setIsMobileLandscape(isMobile && isLandscape);
        };

        checkOrientation(); // initial check
        window.addEventListener('resize', checkOrientation);

        return () => window.removeEventListener('resize', checkOrientation);
    }, []);

    return isMobileLandscape;
};
