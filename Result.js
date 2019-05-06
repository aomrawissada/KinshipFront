import React from 'react'
import './css/Body.css'
import Box from './Box'

const Table= (
    <div>
        This is result.
    </div>
)

class Result extends React.Component {
    render() {
        return (
            <div className="Body">
                <Box title="Result" body={Table} btn="back" link="/" />
            </div>
        );
    }
}

export default Result