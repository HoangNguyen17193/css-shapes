import React from 'react';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {materialDark} from 'react-syntax-highlighter/dist/esm/styles/prism';

import classes from './HighLightCode.module.scss';

const HighLightCode = (props) => {
    return (
        <div className={classes.HighLightCode}>
            <SyntaxHighlighter language="scss" style={materialDark} showLineNumbers={true}>
                {props.codeString || ''}
            </SyntaxHighlighter>
        </div>
    )
};

export default HighLightCode;