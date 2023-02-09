import React from 'react'
import { Button } from 'react-bootstrap'
import '../style/CreateTicketPage.css'
import Hr from '../components/Hr'


function CreateTicketPage() {
  return (
    <div id='createTicketPage'>
        <h3 id='createTicket_title'>
      刷票
    </h3>
    <Hr color="#444" width="90%" height="1"/>
    <div className='createTicket_data'>
       LINE ID: <input type="text" className='createTicket_input'/>
    </div>
    <div className='createTicket_data'>
       empno: <input type="text" className='createTicket_input'/>
    </div>
    <div className='createTicket_data'>
       票卷條碼 #0: <input type="text" className='createTicket_input'/>
       <Button   variant="outline-danger" size='sm'   >清空</Button>
    </div>
    <div className='createTicket_data'>
    票卷條碼 #1: <input type="text" className='createTicket_input'/>
    <Button   variant="outline-danger" size='sm'   >清空</Button>
    </div>
    <div className='createTicket_data'>
    票卷條碼 #2: <input type="text" className='createTicket_input'/>
    <Button   variant="outline-danger" size='sm'   >清空</Button>
    </div>
    <div className='createTicket_data'>
    票卷條碼 #3: <input type="text" className='createTicket_input'/>
    <Button   variant="outline-danger" size='sm' >清空</Button>
    </div>
    <div className='createTicket_data'>
    票卷條碼 #4: <input type="text" className='createTicket_input'/>
    <Button   variant="outline-danger" size='sm'   >清空</Button>
    </div>
    <div className='createTicket_btns'>
    <Button   variant="info"   >掃描</Button>
    <Button   variant="outline-info"  >送出</Button>
    </div>
    <Hr color="#444" width="90%" height="1"/>
    <Button   variant="danger" id='btn_close' >Close</Button>

    </div>
  )
}

export default CreateTicketPage