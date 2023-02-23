/* Header Container */

import { MDBRow } from 'mdb-react-ui-kit';

function Header(props) {
    const { title, subtitle, children } = props;
    return (
        <MDBRow className='py-4'>
            <div className='col-sm-6'>
            <h1 className='text-center text-sm-start text-blue'><a href="">{title}</a></h1>
            <h2 className='text-center text-sm-start'>{subtitle}</h2>
            </div>
            <div className='col-sm-6 mt-2'>
            <p className='text-center text-sm-end'>{children}</p>
            </div>
        </MDBRow>
    )
}

export default Header;