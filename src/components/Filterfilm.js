import {Form} from 'react-bootstrap'
export default function Filterfilms(){
    return(
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">A-Z</option>
            <option value="2">Z-A</option>
            <option value="3">Rating 1 - 10</option>
            <option value='4'>Rating 10 - 1</option>
        </Form.Select>
    )
}