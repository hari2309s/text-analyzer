import styled from '@emotion/styled/macro';
import React, { useContext, useState } from 'react';
import { AppContext } from '../store/AppContext.tsx';

const TextEditor = () => {
    const { setText } = useContext(AppContext);
    const [textAreaValue, setTextAreaValue] = useState<string>('');

    const handleTextAreaChange = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        setTextAreaValue(e.target.value);
        setText(e.target.value);
    };

    return (
        <StyledTextArea
            id="text-area"
            placeholder="Please write here..."
            value={textAreaValue}
            onChange={handleTextAreaChange}
        />
    );
};

const StyledTextArea = styled.textarea({
    background: '#e8e9eb',
    width: '69vw',
    height: '350px',
    margin: '10px 0',
    padding: '35px',
    resize: 'none',
    border: 'none',
    overflow: 'auto',
    outline: 'none',
    boxShadow: 'none',
    fontSize: '20px',

    '-webkit-box-shadow': 'none',
    '-moz-box-shadow': 'none',
});

export default TextEditor;
