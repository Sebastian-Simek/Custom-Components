import { render, screen } from '@testing-library/react';

import { 
  InputControl, 
  SelectControl, 
  TextAreaControl, 
  CheckboxControl, 
  FormButton
} 
  from './FormControls';

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
  expect(textAreaControl.name).toBe('bio');
  expect(textAreaControl.required).toBe(true);
  expect(textAreaControl.placeholder).toBe('Your Bio Here');
});

test('Select Control', async () => {
  render (
    <SelectControl label="Animal" name="animal" required>
      <option>Cat</option>
      <option>Dog</option>
      <option>Rat</option>
    </SelectControl>
  );
  const selectControl = screen.getByLabelText('Animal');
  expect(selectControl.name).toBe('animal');
  expect(selectControl.required).toBe(true);
  expect(selectControl.options.length).toBe(3);
});

test('Checkbox Control', async () => {
  render(
    <CheckboxControl
      legend="Do you accept?"
      label="Yes"
      name="accept"
      required
    />
  );

  const legend = screen.getByText('Do you accept?');
  expect(legend).not.toBeNull();
  const checkboxControl = screen.getByLabelText('Yes');
  expect(checkboxControl.required).toBe(true);
});

test('FormButton', () => {
  render(
    <FormButton>Submit</FormButton>
  );
  
  const button1 = screen.getByRole('button');
  expect(button1.textContent).toBe('Submit');
  const button = screen.getByText('Submit');
  expect(button.textContent).toBe('Submit');
});
