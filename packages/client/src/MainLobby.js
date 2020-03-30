import React, {useState} from "react";
import {NativeSelect, Grid, Paper, TextField, Button} from "@material-ui/core";
import styled from "@emotion/styled";

const PaperPadded = styled(Paper)`
    padding: 2rem;
`;
const SubmitButton = styled(Button) `
    margin-top: 1rem;
    max-width: 30%;
    align-self: center;
`;

function MainLobby() {
    const [role, setRole] = useState('teacher');
    const [roomNumber, setRoomNumber] = useState('');
    return <div className="main-lobby">
        <Grid container>
            <Grid item md={4}/>
            <Grid item xs={12} md={4}>
                <PaperPadded>
                    <form>
                        <Grid container justify="center" direction="column">
                            <NativeSelect value={role} onChange={(e) => setRole(e.target.value)} inputProps={{ "data-testid": "role" }}>
                                <option value="teacher">Teacher</option>
                                <option value="student">Student</option>
                            </NativeSelect>
                            <TextField label="Room Number" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} inputProps={{ "data-testid": "roomNumber" }}/>
                            <SubmitButton data-testid="submit" disabled={role.length === 0 || roomNumber.length === 0} color="primary" variant="contained">Move on</SubmitButton>
                        </Grid>
                    </form>
                </PaperPadded>
            </Grid>
        </Grid>
    </div>;
}
export default  MainLobby;