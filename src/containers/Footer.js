/* Footer Container */

import { MDBFooter } from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='text-center footer'>
            <small className='d-block d-sm-inline-block'>Developer Matteo Stracquadanio</small>
            <small className='d-none d-sm-inline px-2'>&bull;</small>
            <small className='d-block d-sm-inline-block'>Copyright &copy; {new Date().getFullYear()}</small>
        </MDBFooter>
    )
}

export default Footer;