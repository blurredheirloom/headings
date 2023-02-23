/* Presets Component */

import { BOOTSTRAP, FIBONACCI, LUCAS, PENTAGONAL, TRIANGULAR } from '../utils/constants';

function HeadingsPresets(props)
{
    const { onCheck, loadPresets, allowSame, selected } = props;
    return (
        <>
        <div className="form-check form-switch py-4 align-items-center">
            <input className="form-check-input" type="checkbox" checked={allowSame} onChange={onCheck} role="switch" id="flexSwitchCheckDefault" />
            <label className='form-check-label text-uppercase'><small>Allow same size values</small></label>
        </div>
        <div className='py-2'>
            <h6 className='text-uppercase'>Size presets</h6>
            <select className="form-select text-uppercase" value={selected} onChange={loadPresets} >
              <option value={BOOTSTRAP}>Bootstrap</option>
              <option value={FIBONACCI}>Fibonacci</option>
              <option value={LUCAS}>Lucas</option>
              <option value={PENTAGONAL}>Pentagonal</option>
              <option value={TRIANGULAR} disabled={!allowSame}>Triangular</option>
            </select>
        </div>
        </>
    )
}

export default HeadingsPresets;