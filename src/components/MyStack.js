import React from 'react';
import CardStack from './CardStack';
import { stackData } from './data';
import { useTranslation } from "react-i18next";

const MyStack = () => {

    const { t } = useTranslation();

    return (
        <div className="stack">
            <div class="anchor" id="stack"></div>
            <h1>{t('stack-title')}</h1>
            <div class="geeks"></div>
            <p className='presentation-stack'>{t('stack-description')}</p>
            <div className='wrapper-stack'>{stackData.map(stack => (
                <CardStack key={stack.id} stackData={stack} />
            ))}
            </div>
        </div>
    );
};

export default MyStack;