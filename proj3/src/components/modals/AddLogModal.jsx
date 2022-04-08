import React, {useState} from "react";
import M from 'materialize-css/dist/js/materialize.min.js'

const modalStyle = {
    width: '75%',
    height: '75%'
}

const AddLogModal = () => {

    const [message, setMessage] = useState('')
    const [tech, setTech] = useState('')
    const [attention, setAttention] = useState(false)

    const onSubmit = () => {
        if (message === '' || tech === '') {
            M.toast({html: 'Please fill form '})
        }


        //    clear fields
        setMessage('')
        setTech('')
        setAttention(false)
    }

    return (
        <div id={'add-log-modal'} className={'modal'} style={modalStyle}>
            <div className="modal-content">
                <h4>enter sys log</h4>

                <div className={'row'}>
                    <span className={'input-field'}>
                        <input type={'text'}
                               name={'message'}
                               value={message}
                               onChange={e => setMessage(e.target.value)}/>
                        <label htmlFor={'message'} className={'active'}>log message</label>
                    </span>
                </div>

                <div className={'row'}>
                    <span className={'input-field'}>
                        <select name={'tech'}
                                value={tech}
                                className={'browser-default'}
                                onChange={event => setTech(event.target.value)}>
                            <option value={''} disabled>set tech</option>
                            <option value={'name1'}>name1</option>
                            <option value={'name2'}>name2</option>
                            <option value={'name3'}>name3</option>
                        </select>
                    </span>
                </div>

                <div className={'row'}>
                    <div className="input-field">
                        <p>
                            <label>
                                <input type="checkbox"
                                       className={'filled-in'}
                                       checked={attention}
                                       value={attention}
                                       onChange={event => setAttention(!attention)}/>
                                <span>nee attention</span>
                            </label>
                        </p>
                    </div>
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


export default AddLogModal;