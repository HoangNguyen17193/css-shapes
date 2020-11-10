import React, {useEffect, useRef} from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const HighLightCode = (props) => {
    const ref = useRef(null);
    useEffect(() => {

    });
    const codeString = `
            .shape1 { border-radius: 15px; }
            .shape2 { border-top-left-radius: 15px; }
            .shape3 { border-top-right-radius: 15px; }
            .shape4 { border-bottom-left-radius: 15px; }
            .shape5 { border-bottom-right-radius: 15px; }
            .shape6 { border-radius: 0 0 15px 15px; }
            .shape7 { border-radius: 15px 15px 0 0; }
            .shape8 { border-radius: 0 10px 20px; }
            .shape9 { border-radius: 10px 20px; }
            .shape10 { border-radius: 10px/20px; }
            .shape11 { border-radius: 5px 10px 15px 30px/30px 15px 10px 5px; }
            .shape12 { border-radius: 10px 20px 30px 40px/30px; }

            .shape {
                display: inline-block;
                width: 100px;
                height: 100px;
                border: 5px solid #32557f;
            }`;
    return (
        <SyntaxHighlighter language="scss" style={materialDark}>
            {codeString}
        </SyntaxHighlighter>
    )
};

export default HighLightCode;