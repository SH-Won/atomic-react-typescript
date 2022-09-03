import React from 'react';
import {render, screen} from '@testing-library/react';
import LoginPage from '../page/login/LoginPage';
import userEvent from '@testing-library/user-event';

test('enable user click container', async () => {
    render(<LoginPage/>);
    const container = screen.getByText('1');

    expect(container).toHaveTextContent('1');
    await userEvent.click(container);
    expect(container).toHaveTextContent('test');

})
