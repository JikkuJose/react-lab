import React from 'react';
import Button from 'react-bootstrap/lib/Button'
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar'
import Grid from 'react-bootstrap/lib/Grid'
import Image from 'react-bootstrap/lib/Image'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'

export default class RSComponent extends React.Component {
  url(index) {
    return(
      `http://qucentis.net/labs/linksy/images/621x621/${'03'}.jpg`
    );
  }

  testComponent() {
    const imageShapeInstance = (
      <Grid>
        <Row>
          <Col xs={6} md={4}>
            <Image src={this.url(2)} width={'230px'} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Image src={this.url(2)} width={'230px'} circle />
          </Col>
          <Col xs={6} md={4}>
            <Image src={this.url(2)} width={'230px'} humbnail />
          </Col>
        </Row>
      </Grid>
    );

    return(imageShapeInstance);
  }

  render() {
    return(
      <div>
      <ButtonToolbar>
        <Button
          bsStyle="primary">
          Hello
        </Button>
        <Button
          bsStyle="warning">
          Jikku
        </Button>
      </ButtonToolbar>
      {this.testComponent()}
      </div>
    );
  }
}
