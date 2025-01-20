import { 
    Box,
    List, 
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
    DialogContent
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WorkIcon from '@mui/icons-material/Work';

const Customers =()=>{
    
    const total = "13";
    const price ="32 022"

    fetch("http://localhost:5185",{
        mode:"no-cors"
    })
    .then(res=>res.json())
    .then(data=>console.log(data))



    return(
    <Box
        
    >
        <DialogContent
            sx={{
                width:"500px"
            }}
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <AccountCircleIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Общее количество заказчиков" secondary={total} />
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                <Avatar>
                    <WorkIcon />
                </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Сумма" secondary={price+" р."} />
            </ListItem>
            
            </List>
        </DialogContent>
    </Box>
    )
}

export default Customers;