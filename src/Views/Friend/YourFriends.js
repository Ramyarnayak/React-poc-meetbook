import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

   
   
   
   
   
   
    export const RemoveFriends=({your_friends, removeFromFriends, handleSearch})=>{

     
     
        
    
        return (
        <>
       <div className="myfriends">
       {/* <div className="header_input">
            <SearchIcon />
            <input placeholder='Search meetBook' type="text" onChange={(event) =>handleSearch(event)}/>
      </div> */}
        
{your_friends.map((your_friends,id)=>(
  <div className="friend" key={id}>
    <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 25 }}>
  <Paper >
    <Grid container wrap="nowrap" spacing={1}>
      <Grid item>
        <Avatar>{your_friends.name.charAt(0)}</Avatar>
      </Grid>
      <Grid item xs zeroMinWidth>
        <Typography noWrap>{your_friends.name}</Typography>
      </Grid>
      <Grid item xs zeroMinWidth>

        <Button variant="contained" noWrap onClick={()=>removeFromFriends(your_friends)}>UnFriend</Button>
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
    