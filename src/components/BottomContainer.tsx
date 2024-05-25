import styled from '@emotion/styled/macro';
import React, { useContext } from 'react';
import { AppContext } from '../store/AppContext.tsx';

const BottomContainer = () => {
    const { analyzedValues } = useContext(AppContext);

    return (
        <Container>
            <div>
                <h3>Average reading time</h3>
                {analyzedValues.averageReadingTime! > 0 && (
                    <span>{`~ ${analyzedValues.averageReadingTime} mins`}</span>
                )}
            </div>
            <div>
                <h3>Longest word</h3>
                <span>{analyzedValues.longestWord}</span>
            </div>
        </Container>
    );
};

const Container = styled.div({
    background: '#e8e9eb',
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
