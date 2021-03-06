import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import capitalize from 'lodash/capitalize';
import { List } from 'semantic-ui-react';

import styles from '../common/list.module.css';

const companies = ['facebook', 'airbnb', 'netflix'];

const Companies: FC = () => (
  <>
    <List celled relaxed>
      {companies.map(companyName => (
        <List.Item className={styles.item} key={companyName}>
          <List.Icon name="users" size="large" verticalAlign="middle" />
          <List.Content>
            <Link to={`/${companyName}/members`}>
              {capitalize(companyName)}のメンバー
            </Link>
          </List.Content>
        </List.Item>
      ))}
    </List>
  </>
);

export default Companies;
