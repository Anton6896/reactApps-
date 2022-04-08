import React, {useState} from "react";
import M from 'materialize-css/dist/js/materialize.min.js'

const modalStyle = {
    width: '40%',
    height: '40%'
}

const EditLogModal = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({html: 'tech must have first and last name'})
        }

        setLastName('')
        setFirstName('')
    }

    return (
        <div id={'tech-modal'} className={'modal'} style={modalStyle}>
            <div className="modal-content">
                <h4>Add new tech</h4>

                <div className={'row'}>
                    <span className={'input-field'}>
                        <input type={'text'}
                               name={'fist name'}
                               value={firstName}
                               onChange={e => setFirstName(e.target.value)}/>
                        <label htmlFor={'message'} className={'active'}>first name</label>
                    </span>
                </div>

                <div className={'row'}>
                    <span className={'input-field'}>
                        <input type={'text'}
                               name={'last name'}
                               value={lastName}
                               onChange={e => setLastName(e.target.value)}/>
                        <label htmlFor={'message'} className={'active'}>first name</label>
                    </span>
                </div>

            </div>
            <div className="modal-footer">
                <a href="#"
                   onClick={onSubmit}
                   className="modal-close waves-effect blue waves-light btn">Agree</a>
            </div>
        </div>
    )
}


export default EditLogModal;