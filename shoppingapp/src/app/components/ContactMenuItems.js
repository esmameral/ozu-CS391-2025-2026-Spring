import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
export default function ContactMenuItems() {
    return <nav style={{  padding: '1rem', marginBottom: '1rem' }}>
        <Container>
            <Row>
                <Col><Link href="/pages/contactus/contactinfo">Contact Info</Link></Col>
            </Row>
            <Row>
                <Col><Link href="/pages/contactus/contactform">Send Message</Link></Col>
            </Row>
        </Container>
    </nav>
}
