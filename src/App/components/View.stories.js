import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { MemoryRouter } from 'react-router'

import { View as App } from './View'

import { scientists } from 'data'

storiesOf('App', module)
  .addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>)
  .add('With List', () => <App showList scientists={scientists} toggleList={action('Toggle')} />)
  .add('Without List', () => <App toggleList={action('Toggle')} />)
