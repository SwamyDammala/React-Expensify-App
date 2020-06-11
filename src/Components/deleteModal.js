import React from 'react'
import Modal from 'react-modal'

const DeleteModal=(props)=>(
    <Modal 
            isOpen={props.deleteConfim}
            onRequestClose={props.handleModal}
            contentLabel='Delete Expense'
            className='modal'>
        
            <p className='modal__body'>Do you want to remove this item from expense tracker?</p>
            <button onClick={props.handleModal}>Cancel</button>
            <button onClick={props.remove}>Delete</button>
    </Modal>
)

export default DeleteModal

