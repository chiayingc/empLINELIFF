import React, { useState, useEffect } from 'react'
import '../style/MainPage.css'
// import '../style/BindBlock.css'
import Hr from '../components/Hr.js'
import BindBlock from '../components/BindBlock'
import Table from 'react-bootstrap/Table';
import { FiAlignCenter } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'
import keyJson from '../../key.json';
import Swal from 'sweetalert2'
import liff from '@line/liff';




function MainPage() {
  const navigate = useNavigate();
  const [binded, setBinded] = useState(false); //一登入判斷是否綁定
  const [test, setTest] = useState(false);
  // const [userPicUrl, setUserPicUrl] = useState("");
  // const [userName, setUserName] = useState("");
  const [userData, setUserData]=useState([]);

  let lineOs; //紀錄使用者開啟line的系統
  let lineVer; //紀錄使用者的line版本
  let userID; //紀錄使用者的lineID
  let userName; //紀錄使用者的line名稱
  let userPicUrl; //紀錄使用者line照片url

  // console.log(keyJson['liffId']);

 
  let liffID = keyJson['liffId'];

  useEffect(()=>{
  liff.init({
    liffId: liffID
  }).then(
    () => {
      console.log("init success");
      lineOs = liff.getOS();
      console.log("os:", lineOs);
      lineVer = liff.getLineVersion();
      console.log("ver:", lineVer);
      liff.getProfile().then(
        (profile) => {
          // console.log(profile);
          // console.log(profile.userId);
          userID = profile.userId;
          userName = profile.displayName;
          userPicUrl = profile.pictureUrl;
          setUserData([userID,userName, userPicUrl,lineOs,lineVer]);
          // setUserPicUrl(profile.pictureUrl);
          // setUserName(profile.displayName);
        }
      );



    }
  ).catch(
    (error) => {
      console.log("error:",error);
    }
  );




},[]);



  //按下綁定LINE 前往綁定
  const goBind = () => {
    console.log("gobind");
    // setTest(true);

    Swal.fire({
      title: 'empdata',
      // <div  style="font-size:1rem;">userId:<p> ${userID}</p></div><br/>
      html: `<hr/>
      <div class="input-group"><span class="input-group-text">empno: </span><input type="text" id="empNo" class="form-control" placeholder="empno"></div><br/>
      <div class="input-group"><span class="input-group-text">userID: </span><input style="font-size:.5rem; background-color:#fff" type="text" id="lineID" class="form-control" placeholder="${userData[0]}" readonly></div><br/>
      
      <div>OS: ${userData[3]}</div><br/>
      <div>Ver: ${userData[4]}</div>
      `,
      confirmButtonText: '綁定ID',
      focusConfirm: false,
      preConfirm: () => {
        const lineID = Swal.getPopup().querySelector('#lineID').value
        const empNo = Swal.getPopup().querySelector('#empNo').value
        if (!lineID || !empNo) {
          Swal.showValidationMessage(`Please enter lineID and empNo`)
        }
        return { lineID: lineID, empNo: empNo }
      }
    }).then((result) => {
      // Swal.fire(`
      //   lineID: ${result.value.lineID}
      //   empNo: ${result.value.empNo}
      // `.trim())

      console.log("verify");
      console.log("id::", result.value.lineID);
      console.log("empno::", result.value.empNo);
      // 這邊fetch API驗證成不成功
      let apiUrl = "http://www.jithouse.com.tw/test2_lot/index.php?r=test/testapi";

      fetch(apiUrl, { /*設定request內容*/ })
        .then(res => res.json()) /*把response json化*/
        .then(data => {
          /*接到request data後要做的事情*/
          console.log("data:", data);
        })
        .catch(e => {
          /*發生錯誤時要做的事情*/
          console.log("fail");
        })
    })


  }

  // useEffect(() => {
  //   if (binded == true) {
  //     console.log("goBinded");
  //     navigate("/binded");
  //   }
  // }, []);

  //fetch 判斷是否有cookie的API

  // setBinded(true);
  // else if(沒有)
  // setBined(false);



  return (
    <div id='mainPage'>
      {/* {test ? <BindBlock /> : ""} */}

      <div>
        <FiAlignCenter />
      </div>
      <h3>
        MisLineLiff
      </h3>

      <div id="userPic" className="text-center">
        <img src={userData[2]} className="rounded" alt="" />
      </div>

      <br />
      <Table striped>

        <tbody>
          <tr>
            <td>userName:</td>
            <td>{userData[1]}</td>
          </tr>
          <tr>
            <td>登入IP:</td>
            <td>60.249.143.208</td>
          </tr>
          <tr>
            <td colSpan={2} >

              <Button id="btn_bindLINEID" variant="success" onClick={goBind} >綁定LINE</Button>

            </td>
          </tr>
        </tbody>



      </Table>


    </div>
  )
}

export default MainPage