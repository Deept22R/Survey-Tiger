import React, { useState } from 'react';
import './styles.css';
import MultiSelect from '../MultiSelect';
import SingleSelect from '../SingleSelect';

const CreateSurvey = () => {
    const [temp,setTemp] = useState("");
    const handleOption = (event) => {
        setTemp(event.target.value);
    }
    return (
        <>
            <div id="img">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzQZG1X_nrzaGfgZ_joBJd0_Pj4oM7rLPUQ&usqp=CAU"></img>
                <p>Survey Tiger</p>
            </div>
            <div id="label">
                <select id="choice" defaultValue={'DEFAULT'} onChange={handleOption}>
                    <option>Select Question Type</option>
                    <option value="Multi Select">Multi Select</option>
                    <option valse="Single Select">Single Select</option>
                </select>
            </div><br></br>
            {temp==="Multi Select" ? <MultiSelect/>:null}
            {temp==="Single Select" ? <SingleSelect/>:null}
        </>
    );
};

export default CreateSurvey;