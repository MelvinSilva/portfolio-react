import React from 'react';
import CardStack from './CardStack';
import { stackData } from './data'

const MyStack = () => {
    return (
        <div className="stack">
            <div class="anchor" id="stack"></div>
            <h1>Stack</h1>
            <div class="geeks"></div>
            <div className='wrapper-stack'>{stackData.map(stack => (
                <CardStack key={stack.id} stackData={stack} />
            ))}
            </div>
        </div>
    );
};

export default MyStack;