import MainLobby from "./MainLobby";
import React from "react";
import {fireEvent, render} from '@testing-library/react';

test('can select you are student', () => {
    const mockFunc = jest.fn();
    const {getByTestId} = render(<MainLobby proceedFunction={mockFunc}/>);
    const select = getByTestId('role');
    // Select student
    fireEvent.change(select, {target: {value: 'student'}});
    // Verify student was selected
    expect(select.value).toBe('student');

    // check that cannot move forward
    const afterRoleSubmit = getByTestId('submit');
    expect(afterRoleSubmit.disabled).toBe(true);

    const roomNumber = getByTestId('roomNumber');
    expect(roomNumber).toHaveAttribute('aria-invalid', 'true');
    fireEvent.change(roomNumber, {target: {value: '123'}});

    // Verify can move forward with submit button
    const afterRoomSubmit = getByTestId('submit');
    expect(afterRoomSubmit.disabled).toBe(false);

    fireEvent.click(afterRoomSubmit);

    expect(mockFunc.mock.calls).toEqual([['student', '123']]);
});

test('can select if you are a teacher', () => {
    const mockFunc = jest.fn();
    const {getByTestId} = render(<MainLobby proceedFunction={mockFunc}/>);
    const select = getByTestId('role');
    // Select student
    fireEvent.change(select, {target: {value: 'teacher'}});
    // Verify student was selected
    expect(select.value).toBe('teacher');

    // check that cannot move forward
    const afterRoleSubmit = getByTestId('submit');
    expect(afterRoleSubmit.disabled).toBe(true);

    const roomNumber = getByTestId('roomNumber');
    expect(roomNumber).toHaveAttribute('aria-invalid', 'true');
    fireEvent.change(roomNumber, {target: {value: '456'}});

    // Verify can move forward with submit button
    const afterRoomSubmit = getByTestId('submit');
    expect(afterRoomSubmit.disabled).toBe(false);

    fireEvent.click(afterRoomSubmit);

    expect(mockFunc.mock.calls).toEqual([['teacher', '456']]);
});