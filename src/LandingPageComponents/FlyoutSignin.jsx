import React, { useState } from 'react';
import './FlyoutSignin.scss';

const FlyoutSigin = (props) => {
    const [isOpen, setIsOpen] = useState(true);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="navFlyout-signin">
            {isOpen && (
                <div className='signin-modal'>
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <p>{props.message}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FlyoutSigin;