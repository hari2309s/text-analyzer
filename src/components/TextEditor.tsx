import styled from '@emotion/styled/macro';
import React, { useState } from 'react';

const TextEditor = () => {
  const [textAreaValue, setTextAreaValue] = useState<string>('');

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <StyledTextArea value={textAreaValue} onChange={handleTextAreaChange} />
  );
};

const StyledTextArea = styled.textarea({
  background: '#d7dedd',
  width: '69vw',
  height: '400px',
  margin: '10px 0',
  padding: '5px',
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
