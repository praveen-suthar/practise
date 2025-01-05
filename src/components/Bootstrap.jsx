import { Container, Row, Col } from "react-bootstrap";
import "./style/bootstrap.scss";

const Bootstrap = () => {
  return (

    <Row className="g-3">
  <Col style={{ background: 'red' }} >
    <p>Praveen</p>
  </Col>
  <Col style={{ background: 'lightgreen' }}>Sibling Col</Col>
</Row>


    // <Container>
    //   <Row>
    //     <Col className="dont-copy" lg={6} sm={3} style={{ background: "lightblue" }}>
    //       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti
    //       aliquid, neque velit fugiat eius cupiditate praesentium quod, unde
    //       nulla corporis nam obcaecati impedit odit illum minima ab perspiciatis
    //       ipsa? Dolorem.
    //     </Col>
    //     <Col lg={6} sm={3} style={{ background: "yellow" }}>
    //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
    //       asperiores rerum alias. Error dolorem quod qui sequi aliquid accusamus
    //       amet, est illum, quae nulla magnam harum ab consequuntur adipisci
    //       minima?
    //     </Col>
    //   </Row>
    // </Container>
    // <Container>
    //   <Row>
    //     <Col style={{ background: "lightblue" }} xs={12} sm={6} md={4} lg={4}>
    //       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
    //       autem placeat. Totam tempore officia quo. Distinctio illo perspiciatis
    //       animi quos, quidem illum repellendus, saepe ut voluptatum praesentium
    //       minus aliquam dolores!
    //     </Col>
    //     <Col style={{ background: "red" }} xs={12} sm={6} md={4} lg={4}>
    //       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit sed
    //       dolor vero quam ipsa dolorum alias aperiam totam aspernatur eligendi
    //       error ratione blanditiis ad natus, vitae rerum? Temporibus, eaque
    //       inventore.
    //     </Col>
    //     <Col style={{ background: "lightgreen" }} xs={12} sm={6} md={4} lg={4}>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo iste
    //       rerum quaerat nostrum cum nulla voluptas voluptatem ullam debitis,
    //       dolorem asperiores perspiciatis quidem aspernatur magni enim itaque
    //       dignissimos ipsum molestias?
    //     </Col>
    //   </Row>
    // </Container>

  

  );
};

export default Bootstrap;
