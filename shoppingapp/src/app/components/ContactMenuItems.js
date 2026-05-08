import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
export default function ContactMenuItems() {
    return <nav style={{  padding: '1rem', marginBottom: '1rem' }}>
        <Container fluid>
            <Row><Col><Link href="/pages/contactus/contactform"> Contact Form</Link></Col></Row>
            <Row><Col><Link href="/pages/contactus/contactinfo">Display Contact Info</Link></Col></Row>
        </Container>
    </nav>
}
