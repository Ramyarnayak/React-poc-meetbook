import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
export const AddFriends=({add_friends, addToFriends, handleSearch})=>{

    return (
    <>
    <div className='friends'>
    {/* <div className="header_input">
            <SearchIcon />
            <input placeholder='Search meetBook' type="text" onChange={(event) =>handleSearch(event)}/>
      </div>
         */}
    {add_friends.map((add_friend,id)=>(
     <div className="friend" key={id}>
    
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
      <Paper >
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item>
            <Avatar>{add_friend.name.charAt(0)}</Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
            <Typography noWrap>{add_friend.name}</Typography>
          </Grid>
          <Grid item xs zeroMinWidth>

            <Button variant="contained" fill noWrap onClick={()=>{addToFriends(add_friend)}}>Add Friend</Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>




   </div>
   
    ))}

 
  
    </div>
    
    </>
    )
    }
  