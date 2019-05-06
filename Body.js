import React from 'react'
import FileUpload from './FileUpload'
import Box from './Box'
import './css/Body.css'

const DescriptionBody = (
    <div>
        Upload file to calculate probability.
    </div>
);

class Body extends React.Component {
    render() {
        return (
            <div className="Body">
                <Box title="Description" body={DescriptionBody} btn=">> Click here for example file <<" link="/example"/>
                <FileUpload/>
            </div>
        );
    }
}

export default Body
