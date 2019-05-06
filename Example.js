import React from 'react'
import './css/Body.css'
import Box from './Box'
import ex1 from './ex1.jpg'
import ex2 from './ex2.jpg'
import ex3 from './ex3.jpg'

const ExamplePic = (
    <div>
        <img src={ex1} />
        <img src={ex2} />
        <img src={ex3} />
    </div>
)

class Example extends React.Component {
    render() {
        return (
            <div className="Body">
                <Box title="Example" body={ExamplePic} btn="back" link="/" />
            </div>
        );
    }
}

export default Example