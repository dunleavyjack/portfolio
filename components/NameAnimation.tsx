/* eslint-disable @next/next/no-sync-scripts*/
import React from 'react';
import { useNameAnimtion } from '../hooks/useNameAnimation';

const AnimatedName: React.FC = () => {
    useNameAnimtion(); // Custom hook for starting the name animation

    return (
        <div id="top" className="parent-node">
            <div className="reference-node"></div>
        </div>
    );
};

export default AnimatedName;
