// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Header title={text('Title', 'Hello')} />)
  .add('with some emoji', () => <Header title="😀 😎" />);
