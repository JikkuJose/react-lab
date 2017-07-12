import React from 'react';

import { storiesOf } from '@storybook/react';
import { Scientist } from './Scientist'

storiesOf('Scientist', module)
  .add('Without props', () => <Scientist>Newton</Scientist>)
