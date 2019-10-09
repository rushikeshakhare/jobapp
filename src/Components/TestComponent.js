import React from 'react'
import Select from 'react-select'
import './Loading.scss'
import data from './data'

const options = JSON.parse(JSON.stringify(data));

const TestComponent = () => {
    console.log(options.length);
        return (
        <div className="selectInput">
             <select multiple>
                {options.map(elem => {
                    return <option value={elem.value} >{elem.label}</option>
                })}
             </select>
         </div>
        )
}
export default TestComponent