/* FontSize Component */

import { MDBRange, MDBInputGroup,  MDBTooltip, MDBBtn } from 'mdb-react-ui-kit';
import { API_KEY, DEFAULT_FONTSIZE, RESET } from '../utils/constants';
import FontPicker from "font-picker-react";

function FontSize(props)
{
    const { activeFont, onChangeFont, onChangeSize, onReset, min, max, value } = props;
    return (
        <>
          <div className='mb-4'>
            <h6 className='text-uppercase'>font-family</h6>
            <FontPicker
              apiKey={API_KEY}
              activeFontFamily={activeFont}
              onChange={onChangeFont}
            />
          </div>
          <div className='d-flex justify-content-between'>
            <h6 className='text-uppercase'>Base font-size</h6>
            <small className='text-muted font-weight-bold'><b>100% = 1 rem</b></small>
          </div>
          <MDBInputGroup textAfter='px' className='mb-3'>
              <MDBTooltip tag='div' placement="bottom" title={RESET}>
                <MDBBtn className="btn btn-primary tip" onClick={onReset}>
                  <i className="fas fa-eraser"></i>
                </MDBBtn>
              </MDBTooltip>
              <input className='form-control' type='number' min={min} max={max} value={value} onChange={onChangeSize} />
          </MDBInputGroup>
          <MDBRange
            defaultValue={DEFAULT_FONTSIZE}
            min={min}
            max={max}
            step='1'
            value={value}
            onChange={onChangeSize}
          />
        </>
    )
}

export default FontSize;