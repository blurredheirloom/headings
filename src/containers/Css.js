/* CSS Code Container */

import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from 'prism-react-renderer/themes/vsDark';
import { MDBRow } from 'mdb-react-ui-kit';

function CSS(props) {
    const {fontSize, fontFamily, headings} = props;
    const exampleCode = `
    *, html, body {
        font-size: ${fontSize}px;
        font-family: "${fontFamily.family}", ${fontFamily.category};
    }

    h1 {
        font-size: ${headings[0]}rem;
    }

    h2 {
        font-size: ${headings[1]}rem;
    }

    h3 {
        font-size: ${headings[2]}rem;
    }

    h4 {
        font-size: ${headings[3]}rem;
    }

    h5 {
        font-size: ${headings[4]}rem;
    }

    h6 {
        font-size: ${headings[5]}rem;
    }
    `;

    return (
        <MDBRow id="css" className='py-4'>
            <h4 className='text-center text-sm-start'><span className='badge'>CSS</span></h4>
            <div className='py-4'>
            <Highlight {...defaultProps} code={exampleCode} language="scss" theme={vsDark} >
                {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={className} style={style}>
                    {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                    ))}
                </pre>
                )}
            </Highlight>
            </div>
        </MDBRow>
    )
}

export default CSS;