import React, {useState} from "react";
import {Select, MenuItem, Grid, Container, TextField} from "@material-ui/core";

function MainLobby() {
    const [role, setRole] = useState(null);
    const [roomNumber, setRoomNumber] = useState(null);
    return <div className="main-lobby">
        <Container>
            <Grid>
                <form>
                    <Select value={role} onChange={(e) => setRole(e.target.value)}>
                        <MenuItem value={null}/>
                        <MenuItem value="teacher">Teacher</MenuItem>
                        <MenuItem value="student">Student</MenuItem>
                    </Select>
                    <TextField label="Room Number" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)}/>
                </form>
            </Grid>
        </Container>
    </div>;
}
export default  MainLobby;