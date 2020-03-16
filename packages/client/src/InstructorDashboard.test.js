import React from "react";
import {render} from '@testing-library/react';
import InstructorDashboard from "./InstructorDashboard";

test('can render main lobby', () => {
    const {container} = render(<InstructorDashboard/>);
    expect(container).toContainHTML('<div class="instructor-dashboard"></div>');
});