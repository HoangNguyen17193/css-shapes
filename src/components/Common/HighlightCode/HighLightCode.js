import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HighLightCode = (props) => {
    return (
        <SyntaxHighlighter language="scss" style={materialDark}>
            {props.codeString}
        </SyntaxHighlighter>
    )
};

export default HighLightCode;