import { Card } from "react-bootstrap"
// import { MdAttachMoney } from 'react-icons/md';


export default function Benefit(props){
    return(
        <Card.Body className="text-light">
            {/* <MdAttachMoney></MdAttachMoney> */}
            <Card.Title><h4 className="text-success mb-3">{props.manfaat}</h4></Card.Title>
            <p>{props.deskripsi}</p>
        </Card.Body>
    )
}