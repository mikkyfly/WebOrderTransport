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

const OrderRepair =()=>{
    
    const total = "43";
    const price ="32 022"
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
                <ListItemText primary="Общее количество ремонтов" secondary={total} />
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

export default OrderRepair;