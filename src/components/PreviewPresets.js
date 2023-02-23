/* Text Preview Presets Component */

function PreviewPresets(props)
{
    const { onChange, setCustom, customText, isCustom } = props;
    return (
        <>
        <div className='py-2'>
            <h6 className='text-uppercase'>Text Preview</h6>
            <select className="form-select text-uppercase" onChange={onChange} >
              <option value="default">Headings</option>
              <option value="fox">The quick brown fox</option>
              <option value="lorem">Lorem Ipsum</option>
              <option value="custom">Custom</option>
            </select>
            {isCustom &&
            <input className='form-control mt-2' placeholder='Custom preview text...' type="text" value={customText} onChange={setCustom} />
            }
        </div>
        </>
    )
}

export default PreviewPresets;