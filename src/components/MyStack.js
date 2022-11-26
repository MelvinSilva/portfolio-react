import React from 'react';
import CardStack from './CardStack';
import { stackData } from './data'

const MyStack = () => {
    return (
        <div className="stack">
            <div class="anchor" id="stack"></div>
            <h1>Stack</h1>
            <div class="geeks"></div>
            <p className='presentation-stack'>My technical skills
            <br/>
            &#40;pass the 🖱 mouse over the logo if you don't recognize it 😉&#41;</p>
            <div className='wrapper-stack'>{stackData.map(stack => (
                <CardStack key={stack.id} stackData={stack} />
            ))}
            </div>
        </div>
    );
};

export default MyStack;