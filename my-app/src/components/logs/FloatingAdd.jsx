import React from 'react'
import { Tooltip, OverlayTrigger, Button } from 'react-bootstrap';

export default function FloatingAdd() {


    return (
        <div className='fixed-bottom' style={{ margin: '0 0 20px 20px' }}>
            <OverlayTrigger
                key='top'
                placement='top'
                overlay={
                    <Tooltip id={`tooltip-top`}>
                        add new data to log 
                    </Tooltip>
                }
            >
                <Button variant="warning">add</Button>
            </OverlayTrigger>
        </div>
    )
}
