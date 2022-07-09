/* eslint-disable @next/next/no-sync-scripts*/
import React from 'react';
import { useNameAnimtion } from '../hooks/useNameAnimation';
import Image from 'next/image';

const AnimatedName: React.FC = () => {
    // Custom hook for starting the name animation
    useNameAnimtion();

    return (
        <div id="top" className="parent-node" style={{ height: '100vh' }}>
            <div className="reference-node"></div>
        </div>
    );
};

export default AnimatedName;
