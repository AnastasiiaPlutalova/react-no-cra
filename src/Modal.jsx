import React, { useState } from 'react';

import './Modal.scss'

const Modal = ({showModal, render}) => {
    const [isShown, setIsShown] = useState(showModal);
    const [isConfirmed, setIsConfirmed] = useState();

    return isShown &&
        <div className='modal'>
            <div className='modal__close' onClick={() => setIsShown(false)}>x</div>
            <div className='modal__content'>{render(isConfirmed)}</div>
            <div className='modal__buttons'>
                <button className='modal__confirm' onClick={() => setIsConfirmed(true)}>confirm</button>
                <button className='modal__decline' onClick={() => setIsConfirmed(false)}>decline</button>
            </div>
        </div>;
}

export default Modal;
