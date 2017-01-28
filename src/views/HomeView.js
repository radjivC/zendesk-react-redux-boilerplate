import React, { Component, PropTypes } from 'react';

import WelcomeMessage from '../components/WelcomeMessage.js';
import styles from './HomeView.scss';

export class HomeView extends Component {

  render () {
    return (
      <section className={ styles.container }>
        <WelcomeMessage />
      </section>
    );
  }
}

export default HomeView
