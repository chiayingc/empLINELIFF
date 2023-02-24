import React from 'react'

function Test() {
    let testfile=document.querySelector("#testfile");

    const getTestfile=()=>{
        let test=testfile.value;
        console.log(test);
    }

    return (
        <div>
            Test
            <br />
            <input id="testfile" type="file"/>
            <button  onClick={getTestfile}>testestsetsetset</button>


        </div>
    )
}

export default Test