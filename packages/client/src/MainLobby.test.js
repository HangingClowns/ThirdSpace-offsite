import MainLobby from "./MainLobby";
import React from "react";
import {fireEvent, render} from '@testing-library/react';

test('can select you are student', () => {
    const {getByTestId} = render(<MainLobby/>);
    const select = getByTestId('role');
    // Select student
    fireEvent.change(select, {target: {value: 'student'}});
    // Verify student was selected
    expect(select.value).toBe('student');

    // check that cannot move forward
    const afterRoleSubmit = getByTestId('submit');
    expect(afterRoleSubmit.disabled).toBe(true);

    const roomNumber = getByTestId('roomNumber');
    fireEvent.change(roomNumber, {target: {value: '123'}});

    // Verify can move forward with submit button
    const afterRoomSubmit = getByTestId('submit');
    expect(afterRoomSubmit.disabled).toBe(false);

    // Clicking on submit will take student to StudentClassroom
});