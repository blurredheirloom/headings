
/* CSS Show Button Component */

function CSSButton(props) {
    const { showCode, onClick } = props;
    
    return (
        <div className='d-flex justify-content-center py-4'>
            <button className="btn btn-primary btn-lg d-inline-flex align-items-center" onClick={onClick}>
            <i className="fab fa-css3-alt fa-2x"></i><label>{showCode && "Hide CSS" || "Show CSS"}</label>
            </button>
        </div>
    )
}

export default CSSButton;