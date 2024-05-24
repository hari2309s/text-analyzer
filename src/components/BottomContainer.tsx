import styled from '@emotion/styled/macro';
import React from 'react';

const BottomContainer = () => {
    return (
        <Container>
            <div>
                <h3>Average reading time</h3>
                <span>~ 1 minute</span>
            </div>
            <div>
                <h3>Longest word</h3>
                <span>Hello!</span>
            </div>
        </Container>
    );
};

const Container = styled.div({
    background: '#d7dedd',
    width: '70vw',
    height: '90px',
    borderRadius: '3px',
    marginTop: '10px',
    padding: '5px 27px',
    display: 'flex',
    justifyContent: 'space-between',

    '> div': {
        margin: '3px',

        '> h3': {
            lineHeight: '10px',
        },

        '> span': {
            fontWeight: 400,
        },
    },
});

export default BottomContainer;
