import React from "react";
import {render} from '@testing-library/react';
import StudentClassroom from "./StudentClassroom";

test('can render student classroom', () => {
    const {container} = render(<StudentClassroom/>);
    expect(container).toContainHTML('<div class="student-classroom"></div>');
});