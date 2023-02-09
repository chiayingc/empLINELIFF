import React, {useState, useEffect} from 'react'
import '../style/BindedPage.css'
import Hr from '../components/Hr.js'
import BindBlock from '../components/BindBlock'
import Table from 'react-bootstrap/Table';
import { FiAlignCenter } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap'

function BindedPage() {
  const navigate=useNavigate();

    ///////////////要再驗證一次有沒有cookie避免直接用網址進入
  return (
    <div id='bindedPage'>
    
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
          <td>狀態:</td>
          <td>true</td>
        </tr>
        <tr>
          <td>員編 :</td>
          <td>01012336</td>
        </tr>
        <tr>
          <td>姓名:</td>
          <td>歐冠輝</td>
        </tr>
        <tr>
          <td>登入IP:</td>
          <td>60.249.143.208</td>
        </tr>
        <tr  >
            <td colSpan={2}>
        <Button  id="btn_goTicket" variant="primary" onClick={()=>{navigate("/create")}} >業績刷票</Button>
        </td>
        </tr>
      </tbody>


    
  </Table>

      
  </div>
  )
}

export default BindedPage