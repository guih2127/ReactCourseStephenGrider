import react, { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
    const [currentPath, setCurrentPath] = useState(window.location.pathName);
    useEffect(() => {
        const onLocationChange = () => {
            setCurrentPath(window.location.pathName);
        };

        window.addEventListener('popstate', onLocationChange);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
        }
    }, []);

    return currentPath === path ? children : null;
};

export default Route;