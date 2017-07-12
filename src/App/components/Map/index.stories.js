import React from 'react';

import { storiesOf } from '@storybook/react';
import { Map } from './index'

storiesOf('Map', module)
  .add('Without param', () => <Map />)
