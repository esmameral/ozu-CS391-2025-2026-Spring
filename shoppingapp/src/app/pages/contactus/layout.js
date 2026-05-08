import ContactMenuItems from "@/app/components/ContactMenuItems";
import Link from "next/link";
import { Col, Container, Row } from "reactstrap";

export default function ContactUsLayout({ children }) {
  return (
    <div>

      <Container fluid>
        <Row>
          <Col className="col-md-3"> <ContactMenuItems></ContactMenuItems></Col>
          <Col className="col-md-9"><section>
            {children}
          </section></Col>
        </Row>
      </Container>



    </div>
  )
}
