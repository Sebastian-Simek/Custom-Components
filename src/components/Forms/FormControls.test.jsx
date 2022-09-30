import { render, screen } from '@testing-library/react';

import { InputControl, TextAreaControl } from './FormControls';

test('Input Control', async () => {
  render(
    <InputControl 
      label="My Label" 
      name="username" 
      type="email"
      placeholder="Your username" 
    />
  );

  const inputControl = screen.getByLabelText('My Label');
  expect(inputControl.name).toBe('username');
  expect(inputControl.placeholder).toBe('Your username');
  expect(inputControl.type).toBe('email');
});

test('Text Area', async () => {
  render (
    <TextAreaControl 
      label="bio"
      placeholder="Your Bio Here"
      required
      name="bio"
    />
  );

  const textAreaControl = screen.getByLabelText('bio');
});
