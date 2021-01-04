import React from 'react'
import { Form } from 'react-bootstrap';

class DateOfBirthPicker extends React.Component{

    render(){

        return(
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <Form.Group controlId="dob">
                            <Form.Label>Születési idő:</Form.Label>
                            <Form.Control type="date" name="dateOfBirth" placeholder="Születési idő" />
                        </Form.Group>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default DateOfBirthPicker;