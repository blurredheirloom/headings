/* Headings Settings Component */

import { MDBRow, MDBInputGroup, MDBTooltip, MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from 'mdb-react-ui-kit';
import { getUnitVal, found } from '../utils/functions';
import { PT, PX, PERC, STEP, MAX_HEADER_SIZE, DEFAULT_REMS } from '../utils/constants';

function HeadingsSettings(props) {
    const { headings, setHeading, fontSize, units, changeUnits, currentPreset } = props;
    return(
        <div className='col-lg-9 offset-lg-1 mt-4 py-4 px-4'>
        {
            headings.map((h, index) =>
                <MDBRow key={index} className='align-items-center justify-content-end py-2'>
                    <div className='col-md-6 col-1 text-sm-start mt-2 px-0'>
                    {index == 0 && 
                        <><h1 className='d-none d-md-block'>Heading {index+1}</h1><h1 className='d-md-none reduced'>h{index+1}</h1></>
                    }
                    {index == 1 && 
                        <><h2 className='d-none d-md-block'>Heading {index+1}</h2><h2 className='d-md-none reduced'>h{index+1}</h2></>
                    }
                    {index == 2 && 
                        <><h3 className='d-none d-md-block'>Heading {index+1}</h3><h3 className='d-md-none reduced'>h{index+1}</h3></>
                    }
                    {index == 3 && 
                        <><h4 className='d-none d-md-block'>Heading {index+1}</h4><h4 className='d-md-none reduced'>h{index+1}</h4></>
                    }
                    {index == 4 && 
                        <><h5 className='d-none d-md-block'>Heading {index+1}</h5><h5 className='d-md-none reduced'>h{index+1}</h5></>
                    }
                    {index == 5 && 
                        <><h6 className='d-none d-md-block'>Heading {index+1}</h6><h6 className='d-md-none reduced'>h{index+1}</h6></>
                    }
                    </div>
                    <div className='col-md-3 col-6'>
                    <MDBInputGroup textAfter='rem'>
                        <MDBTooltip tag='div' placement="bottom" title="RESET">
                        <MDBBtn className="btn btn-primary tip" onClick={() => setHeading(found(DEFAULT_REMS, currentPreset).values[index], index)}>
                            <i className="fas fa-eraser"></i>
                        </MDBBtn>
                        </MDBTooltip>
                        <input className='form-control' step={STEP} min={index<headings.length-1 ? headings[index+1]+STEP : 1} max={MAX_HEADER_SIZE} type="number" value={headings[index]} onChange={(e) => setHeading(e.target.value, index)} />
                    </MDBInputGroup>
                    </div>
                    <div className='col-md-3 col-5 px-1'>
                    <MDBInputGroup textBefore='=' className='disabled'>
                        <input disabled className='form-control disabled text-sm-end text-center' type="text" value={getUnitVal(fontSize, units[index], headings[index])} />
                        <MDBDropdown>
                        <MDBDropdownToggle className='dropdown-toggle-split px-2'>
                            <span>{units[index]}</span>
                        </MDBDropdownToggle>
                        <MDBDropdownMenu className='text-uppercase'>
                            <MDBDropdownItem link onClick={(e) => {e.preventDefault(); changeUnits(e.target.text, index)}}>{PX}</MDBDropdownItem>
                            <MDBDropdownItem link onClick={(e) => {e.preventDefault(); changeUnits(e.target.text, index)}}>{PT}</MDBDropdownItem>
                            <MDBDropdownItem link onClick={(e) => {e.preventDefault(); changeUnits(e.target.text, index)}}>{PERC}</MDBDropdownItem>
                        </MDBDropdownMenu>
                        </MDBDropdown>
                    </MDBInputGroup>
                    </div>
                </MDBRow>
            )}
        </div>
    )
}

export default HeadingsSettings;