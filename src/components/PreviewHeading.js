/* Preview Heading Component */

import { PT, PX, PERC, REM } from "../utils/constants";

function PreviewHeading(props) {
    return (
        <>
        {props.size == 0 && <h1 style={{fontSize: props.remSize+'em'}} className='apply-font'>{props.text == 'Heading' ? props.text + ' ' + parseInt(props.size+1) : props.text}</h1>}
        {props.size == 1 && <h2 style={{fontSize: props.remSize+'em'}} className='apply-font'>{props.text == 'Heading' ? props.text + ' ' + parseInt(props.size+1) : props.text}</h2>}
        {props.size == 2 && <h3 style={{fontSize: props.remSize+'em'}} className='apply-font'>{props.text == 'Heading' ? props.text + ' ' + parseInt(props.size+1) : props.text}</h3>}
        {props.size == 3 && <h4 style={{fontSize: props.remSize+'em'}} className='apply-font'>{props.text == 'Heading' ? props.text + ' ' + parseInt(props.size+1) : props.text}</h4>}
        {props.size == 4 && <h5 style={{fontSize: props.remSize+'em'}} className='apply-font'>{props.text == 'Heading' ? props.text + ' ' + parseInt(props.size+1) : props.text}</h5>}
        {props.size == 5 && <h6 style={{fontSize: props.remSize+'em'}} className='apply-font'>{props.text == 'Heading' ? props.text + ' ' + parseInt(props.size+1) : props.text}</h6>}
        <p className='details  justify-content-center justify-content-sm-start'><i>h{props.size+1} - Heading {props.size+1}</i></p>
        <ul className='details  justify-content-center justify-content-sm-start'>
            <li className='small'>{props.pxSize} {PX}</li>
            <li className='small'>{props.ptSize} {PT}</li>
            <li className='small'>{props.remSize} {REM}</li>
            <li className='small'>{props.percSize} {PERC}</li>
        </ul>
        {props.size<6 && 
            <hr className="hr" />
        }
        </>
    )
}

export default PreviewHeading;