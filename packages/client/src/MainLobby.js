import React, {useState} from "react";
import {FormControl, NativeSelect, Grid, Paper, TextField, Button, InputLabel} from "@material-ui/core";
import styled from "@emotion/styled";

const PaperPadded = styled(Paper)`
    padding: 2rem;
`;
const SubmitButton = styled(Button) `
    margin-top: 1rem;
    max-width: 30%;
    align-self: center;
`;

function MainLobby({proceedFunction}) {
    const [role, setRole] = useState('teacher');
    const [roomNumber, setRoomNumber] = useState('');
    const hasRoomError = roomNumber.length === 0;
    return <div className="main-lobby">
        <Grid container>
            <Grid item md={4}/>
            <Grid item xs={12} md={4}>
                <PaperPadded>
                    <form>
                        <Grid container justify="center" direction="column">
                            <FormControl>
                                <InputLabel htmlFor="role">Role</InputLabel>
                                <NativeSelect value={role} onChange={(e) => setRole(e.target.value)} inputProps={{ "data-testid": "role", id: "role" }}>
                                    <option value="teacher">Teacher</option>
                                    <option value="student">Student</option>
                                </NativeSelect>
                            </FormControl>
                            <TextField label="Room Number" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} inputProps={{ "data-testid": "roomNumber" }} error={hasRoomError} helperText={hasRoomError ? 'Need a room number' : null}/>
                            <SubmitButton data-testid="submit" disabled={role.length === 0 || hasRoomError} color="primary" variant="contained" onClick={(e) => proceedFunction(role, roomNumber)}>Move on</SubmitButton>
                        </Grid>
                    </form>
                </PaperPadded>
            </Grid>
        </Grid>
    </div>;
}
export default  MainLobby;