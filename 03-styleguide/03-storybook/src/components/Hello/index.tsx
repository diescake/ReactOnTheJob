/** @jsx jsx */
import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { jsx } from '@emotion/core';
import capitalize from 'lodash/capitalize';
import { List } from 'semantic-ui-react';

import { listItem } from '../common/list';

const DEFAULT_ANIMALS = ['cat', 'neko', 'nuko'];

const Hello: FC<{ animals?: string[] }> = ({ animals = DEFAULT_ANIMALS }) => (
  <div>
    <List celled relaxed>
      {animals.map(animal => (
        <List.Item css={listItem} key={animal}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <List.Content>
            <Link to={`/${animal}/animals`}>{capitalize(animal)}</Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </div>
);

export default Hello;
