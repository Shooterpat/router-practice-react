import React from 'react';
import { Navigate} from 'react-router-dom'

function Protected(props) {



    return (
        <div>
            <h3>If you can see this you are authorized</h3>
        </div>
    );
}

export default Protected;