import spinner from '../../static/spinner.gif'
import React, {Fragment} from 'react'

let Spinner = () => {
    return (
        <Fragment>
            <img
                src={spinner}
                alt="Loading ..."
                style={{
                    width: '200px',
                    margin: 'auto',
                    display: 'block'
                }}
            />
        </Fragment>
    )
}

export default Spinner