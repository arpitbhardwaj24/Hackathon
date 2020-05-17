import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
// import Logo from '../../assets/icon-logo';
import Logo from '../../assets/shapes.svg';
import { shape } from 'prop-types';

const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 19,
        lineHeight: '24px',
        letterSpacing: '0.4px',
        color: '#A4A6B3',
        opacity: 0.7,
        marginLeft: 12
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            <img src={ Logo } style={{width: '30px'}}/>
            <span className={css(styles.title)}>Chronos Admin</span>
        </Row>
    );
}

export default LogoComponent;
