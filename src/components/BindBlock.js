import React from 'react'
import { Button } from 'react-bootstrap'
import '../style/BindBlock.css'
import Hr from './Hr.js'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function BindBlock() {

   
    const verifyLineID=async()=>{
        console.log("verify");
        // 這邊fetch API驗證成不成功


        let apiUrl="http://www.jithouse.com.tw/test2_lot/index.php?r=test/testapi";

        fetch( apiUrl, { /*設定request內容*/})
        .then(res => res.json()) /*把request json化*/
        .then(data => {
              /*接到request data後要做的事情*/
              console.log("data:",data);
        })
        .catch(e => {
            /*發生錯誤時要做的事情*/
            console.log("fail");
        })


        

/* line liff */










/* */






    let verifyResult="";


// 如果成功 alert成功 (按下alert的OK後跳轉頁面)
    //(更改alert成功的element display)
// 如果失敗 alert驗證失敗 留在原頁面

    ///(if驗證成功)
        verifyResult="綁定成功";
    ///(失敗)
      verifyResult="綁定失敗，員編不存在";

    const MySwal = withReactContent(Swal);
    await MySwal.fire({
    title: verifyResult,
    html:<p>【s a subclass of `Swal` with all th】</p>,
}).then(() => {
         //跳轉畫面
        console.log("success");
    })
    

    
   

}


  return (
    <div id='bindBlock'>
      <div id='background'></div>
      <div id='bindForm'>


    <h3 id='bindBlock_title'>
      Emp資料
    </h3>
    <Hr color="#444" width="90%" height="1"/>
    <div className='bindBlock_data'>
       LINE ID: <input type="text" id='bindBlock_lineID'/>
    </div>
    <div className='bindBlock_data'>
       empno: <input type="text" id='bindBlock_empNo'/>
    </div>
    <div className='bindBlock_data'>
       OS: <div id='bindBlock_OS'>IOS</div>
    </div>
    <div className='bindBlock_data'>
       Ver: <div  id='bindBlock_Ver'>12.6.0</div>
    </div>        
    <Button id="btn_bindID" className='btn' variant="light" onClick={verifyLineID}>綁定ID</Button>
    <Hr color="#444" width="90%" height="1"/>
    <Button id='btn_close' className='btn' variant="outline-secondary">Close</Button>

    </div>
</div>
  )
}

export default BindBlock