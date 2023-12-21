import { Container } from "react-bootstrap";
import Infofilm from "./Info";
import './info.css'
import gambar1 from '../picture/ip.jpg'

export default function Deskripsifilm(){
    return(
        <Container fluid className="bg">
            <Container>
                <Infofilm plot ={'Ip Man and his son encounter racial discrimination after travelling to the United States to seek a better life.'} actor={'Dinnie Yen, Scott Adkins, Danny Chan, Vanda Margraf, Chris Collins'} judul={'IP Man 4'} rating={'10'} year={'2019'} realese={'28 Desember, 2019'} genre={'Drama, Action, History'} bahasa={'English'} gambar={gambar1} link='/films'></Infofilm>
            </Container>
        </Container>
    )
}