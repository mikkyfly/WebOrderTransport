import { Box, Button, Dialog } from '@mui/material';
import './App.css';
import { useState } from 'react';
import Customers from './components/Customers';
import Executor from './components/Executor';
import OrderRepair from './components/OrderRepair';
import TransportTime from './components/TransportTime';

function App() {

  const[order1,setOrder1]=useState(false);
  const[order2,setOrder2]=useState(false);
  const[order3,setOrder3]=useState(false);
  const[order4,setOrder4]=useState(false);



  const openWindowOrder1=()=>{
    setOrder1(true)
  }
  const closeWindowOrder1=()=>{
    setOrder1(false)
  }

  const openWindowOrder2=()=>{
    setOrder2(true)
  }
  const closeWindowOrder2=()=>{
    setOrder2(false)
  }

  const openWindowOrder3=()=>{
    setOrder3(true)
  }
  const closeWindowOrder3=()=>{
    setOrder3(false)
  }
  const openWindowOrder4=()=>{
    setOrder4(true)
  }
  const closeWindowOrder4=()=>{
    setOrder4(false)
  }


  return (
    <Box className="App">
      <Button
      onClick={()=>openWindowOrder1()}
        sx={{
          margin:"100px 100px 100px 100px"
        }}
      >
        Заказчику
      </Button>
      <Button
        onClick={()=>openWindowOrder2()}
        sx={{
          margin:"100px 100px 100px 100px"
        }}
      >
        Исполнителю
      </Button>
      <Button
        onClick={()=>openWindowOrder3()}

        sx={{
          margin:"100px 100px 100px 100px"
        }}
      >
        Отчет по ремонтам
      </Button>
      <Button
        onClick={()=>openWindowOrder4()}

        sx={{
          margin:"100px 100px 100px 100px"
        }}
      >
        Отчет по транспорту
      </Button>
      <Dialog
        open={order1}
        onClose={closeWindowOrder1}
      >
        <Customers />
      </Dialog>
      <Dialog
        open={order2}
        onClose={closeWindowOrder2}
      >
        <Executor/>
      </Dialog>
      <Dialog
        open={order3}
        onClose={closeWindowOrder3}
      >
        <OrderRepair/>
      </Dialog>
      <Dialog
        open={order4}
        onClose={closeWindowOrder4}
      >
        <TransportTime/>
      </Dialog>
    </Box>
  );
}

export default App;
