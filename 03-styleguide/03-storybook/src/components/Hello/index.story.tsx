/** @jsx jsx */
import { BrowserRouter } from 'react-router-dom';
import { jsx } from '@emotion/core';
import { storiesOf } from '@storybook/react';
import { array } from '@storybook/addon-knobs';

import Hello from './index';

const animals = ['dog', 'cat', 'nuko', 'nukko', 'kawayo'];

storiesOf('Hello/index', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => <Hello />)
  .add('with data', () => <Hello animals={array('animals', animals)} />);
