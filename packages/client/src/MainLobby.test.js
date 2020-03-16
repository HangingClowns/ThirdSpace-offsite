import MainLobby from "./MainLobby";
import React from "react";
import {fireEvent, render} from '@testing-library/react';

test('can select you are student', () => {
    const {container, findBy} = render(<MainLobby/>);
    const select = container.querySelector('Select');
    // Select student
    fireEvent.change(select, {target: {value: 'student'}});
    // Verify student was selected
    const element = findBy(/selected/);
    expect(element.innerText).toBe('Student');

    // Enter room #
    // Verify room # is able to move forward

    // Verify can move forward with submit button
    // Clicking on submit will take student to StudentClassroom
});