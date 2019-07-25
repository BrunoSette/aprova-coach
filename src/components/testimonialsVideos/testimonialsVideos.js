import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class TestimonialsVideos extends Component {
  render() {
    return (
      <div className="background-gray" id="depoimentos">
        <Container className="padding-top-40 padding-bottom-40">
          <Row>
            <Col>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title="youtube"
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/videoseries?list=PLPScevBERCaSGDdV7xdgecdDIu4YlVp4I&amp;controls=0&amp;showinfo=0"
                  allowfullscreen
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
