import React from 'react';
import Brick from 'grommet/components/Brick'
import Bricks from 'grommet/components/Bricks'

export default class GrommetComponent extends React.Component {
  render() {
    return(
      <div>
        <Bricks>
          <Brick colorIndex="neutral-1" type="large" href="http://www.grommet.io/docs/" texture="img/carousel-1.png" />
          <Brick label="Second" colorIndex="neutral-2" type="tall" />
          <Brick label="Third" colorIndex="neutral-3">
            {/* <GrommetLogo size="large" /> */}
          </Brick>
          <Brick label="Fourth" colorIndex="neutral-4" />
        </Bricks>
      </div>
    );
  }
}
