/* Settings ContainerS */

import FontSize from '../components/FontSize';
import HeadingsPresets from '../components/HeadingsPresets';
import PreviewPresets from '../components/PreviewPresets';
import { MIN_SIZE, MAX_SIZE } from '../utils/constants';
import { MDBRow, MDBBtn } from 'mdb-react-ui-kit';
import HeadingsSettings from '../components/HeadingsSettings';
import { handleClickScroll } from '../utils/functions';

function Settings(props) {
    const { activeFont, onChangeFont, onReset, onChangeSize, value, onCheck, loadPresets, allowSame, selected, onChangePreviewText, setCustomText, customText, isCustom, headings, setHeading, units, changeUnits } = props;
    return (
        <MDBRow id="settings" className='py-4'>
            <div className='col-sm-6'>
                <h4 className='text-center text-sm-start'><span className='badge'>Settings</span></h4>
            </div>
            <div className='col-sm-6'>
            <h4 className='text-center text-sm-end'>
                <MDBBtn className="btn btn-primary my-4 my-sm-0" onClick={() => handleClickScroll('preview')}>
                <i className="fas fa-eye"></i><label>Preview</label>
                </MDBBtn>
            </h4>
            </div>
            <div className='col-lg-2 py-4'>
                <FontSize 
                    onChangeFont = {onChangeFont} 
                    activeFont = {activeFont}
                    onReset = {onReset}
                    onChangeSize = {onChangeSize}
                    min = {MIN_SIZE}
                    max = {MAX_SIZE}
                    value = {value}
                />
                <HeadingsPresets 
                    onCheck = {onCheck} 
                    loadPresets = {loadPresets} 
                    allowSame = {allowSame} 
                    selected = {selected}
                />
                <PreviewPresets
                    onChange = {onChangePreviewText}
                    setCustom = {setCustomText}
                    customText = {customText}
                    isCustom = {isCustom}
                />
            </div>
            <HeadingsSettings 
                headings={headings} 
                units={units} 
                setHeading={setHeading} 
                fontSize={value} 
                changeUnits={changeUnits}
            />
        </MDBRow>
    )
}

export default Settings;