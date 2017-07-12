import React from 'react';

import { storiesOf } from '@storybook/react';
import { Scientist } from './Scientist'

storiesOf('Scientist', module)
  .addDecorator(story => <div style={{padding: 20}}>{story()}</div>)
  .add('Without param', () => <Scientist>Newton</Scientist>)
  .add('With param = 0.5', () => <Scientist param={0.5}>Newton</Scientist>)
  .add('With param = 0', () => <Scientist param={0}>Newton</Scientist>)
