import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Mixpanel } from '../../Mixpanel';
import YouTube from 'react-youtube';

export default class TestimonialsVideos extends Component {
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <div className="background-gray" id="depoimentos">
        <Container className="padding-top-40 padding-bottom-40">
          <Row>
            <Col>
              <div className="embed-responsive embed-responsive-16by9">
                {/* <iframe
                  onClickCapture={Mixpanel.track("Clicou no Youtube Video")}
                  on
                  title="youtube"
                  class="embed-responsive-item"
                  src="https://www.youtube.com/embed/videoseries?list=PLPScevBERCaSGDdV7xdgecdDIu4YlVp4I&amp;controls=0&amp;showinfo=0&amp;rel=0"
                  allowfullscreen
                ></iframe> */}
                <YouTube
                  videoId="fjiLr-aZw9w"
                  opts={opts}
                  onReady={this._onReady}
                  onPlay={() => Mixpanel.track('Youtube Video Play')}
                  onPause={() => Mixpanel.track('Youtube Video Pause')}
                  onEnd={() => Mixpanel.track('Youtube Video End')}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
