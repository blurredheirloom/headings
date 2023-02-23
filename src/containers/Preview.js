/* Preview Container */

import { MDBRow, MDBBtn} from 'mdb-react-ui-kit';
import { getUnitVal } from '../utils/functions';
import PreviewHeading from '../components/PreviewHeading';
import { PT, PX, PERC } from '../utils/constants';
import { handleClickScroll } from '../utils/functions';

function Preview(props) {
    const {fontSize, onClick, headings, text, title} = props;
    return(
        <MDBRow id="preview" className='py-4' style={{fontSize: fontSize+"px"}}>
        <div className='col-sm-6'>
          <h4 className='text-center text-sm-start'><span className='badge'>{title}</span></h4>
        </div>
        <div className='col-sm-6'>
          <h4 className='text-center text-sm-end'>
            <MDBBtn className="btn btn-primary my-4 my-sm-0" onClick={() => handleClickScroll('settings')} >
              <i className="fas fa-cog"></i><label>Settings</label>
            </MDBBtn>
          </h4>
        </div>
        <div className='text-center text-sm-start py-4'>
          {
            headings.map((h, index) => <PreviewHeading key={index} size={index} text={text} pxSize={getUnitVal(fontSize, PX, h)} ptSize={getUnitVal(fontSize, PT, h)} remSize={h} percSize={getUnitVal(fontSize, PERC, h)} />) 
          }
        </div>
      </MDBRow>
    )
}

export default Preview;