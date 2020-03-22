import React from 'react'
import './Study.scss'
import { InRange } from './Date'
export default () => <div className="study">
    <div className="cert">
        <h3>University of Pannonia @ Veszprém, Hungary</h3>
        <h4>Department of Computer Science</h4>
        <h5>Software Engineer BSC</h5>
        <InRange from={new Date("2016-09-01")} to={new Date("2019-06-01")} />
    </div>
    <div className="cert">
        <h3>Palfy @ Szolnok, Hungary</h3>
        <h5>Electrical and Electronics Technical class</h5>
        <InRange from={new Date("2012-09-01")} to={new Date("2016-06-01")} />
    </div>
</div>