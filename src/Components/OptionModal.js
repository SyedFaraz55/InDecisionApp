import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({selectedOption,handleClose})=> (
    <div>
        <Modal 
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        onRequestClose={handleClose}
        closeTimeoutMS={200}
        className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {selectedOption && <p className="modal__body">{selectedOption}</p>}
            <button className="button" onClick={handleClose}>Close</button>
        </Modal>
    </div>
);

export default OptionModal