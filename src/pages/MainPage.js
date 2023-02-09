import React, {useState, useEffect} from 'react'
import '../style/MainPage.css'
// import '../style/BindBlock.css'
import Hr from '../components/Hr.js'
import BindBlock from '../components/BindBlock'
import Table from 'react-bootstrap/Table';
import { FiAlignCenter } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import Swal from 'sweetalert2'

// import withReactContent from 'sweetalert2-react-content'


function MainPage() {

  const navigate=useNavigate();
  const [binded, setBinded]=useState(false); //一登入判斷是否綁定
  const [test, setTest]=useState(false);
  



  //按下綁定LINE 前往綁定
  const goBind=()=>{
    console.log("gobind");
    setTest(true);

    // Swal.fire({
    //   title: 'Emp資料',
    //   html: `<Hr color="#444" width="90%" height="1"/>
    //   <div className='bindBlock_data'>
    //      LINE ID: <input type="text" id='bindBlock_lineID'/>
    //   </div>
    //   <div className='bindBlock_data'>
    //      empno: <input type="text" id='bindBlock_empNo'/>
    //   </div>
    //   <div className='bindBlock_data'>
    //      OS: <div id='bindBlock_OS'>IOS</div>
    //   </div>
    //   <div className='bindBlock_data'>
    //      Ver: <div  id='bindBlock_Ver'>12.6.0</div>
    //   </div>        
    //   <Button id="btn_bindID" className='btn' variant="light" onClick={verifyLineID}>綁定ID</Button>
     
    //   <Button id='btn_close' className='btn' variant="outline-secondary">Close</Button>`,
    //   confirmButtonText: 'Sign in',
    //   focusConfirm: false,
    //   preConfirm: () => {
    //     const login = Swal.getPopup().querySelector('#login').value
    //     const password = Swal.getPopup().querySelector('#password').value
    //     if (!login || !password) {
    //       Swal.showValidationMessage(`Please enter login and password`)
    //     }
    //     return { login: login, password: password }
    //   }
    // }).then((result) => {
    //   Swal.fire(`
    //     Login: ${result.value.login}
    //     Password: ${result.value.password}
    //   `.trim())
    // })
    




  }

  useEffect(()=>{
    if(binded==true){
      console.log("goBinded");
      navigate("/binded");
    }
  },[]);
  
  //fetch 判斷是否有cookie的API

  // setBinded(true);
  // else if(沒有)
  // setBined(false);



  return (
    <div id='mainPage'>
      {test?<BindBlock />:""}

      <div>
      <FiAlignCenter />
      </div>
      <h3>
        MisLineLiff
      </h3>

      <div>
        pic
      </div>

      <Table striped>


      <tbody>
      <tr>
        <td>登入IP:</td>
        <td>60.249.143.208</td>
      </tr>
      <tr>
        <td colSpan={2} >
          
        <Button  id="btn_bindLINEID" variant="success" onClick={goBind} >綁定LINE</Button>
          
          </td>
      </tr>
    </tbody>


      
    </Table>

        
    </div>
  )
}

export default MainPage