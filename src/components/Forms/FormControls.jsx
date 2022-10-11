/* eslint-disable react/prop-types */
import styles from './FormControl.css';
import classnames from 'classnames';

export function InputControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <input {...rest}/> 
    </label>
  );
}

export function LabelText({ text, required }) {
  const className = classnames(styles.LabelText, {
    [styles.Required]: required,
  });
  return <span className={className}>{text}</span>;
}


export function TextAreaControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <textarea {...rest}  />
    </label>

  );
}

export function SelectControl({ label, children, ...rest }) {
  return (
    <label>
      {label}
      <select {...rest}>
        {children}
      </select>
    </label>
  );
}

export function CheckboxControl({
  legend,
  required,
  label,
  ...rest
}) {
  return (
    <fieldset>
      <legend>
        <LabelText text={legend} required={required} />
      </legend>
      <label>
        <input type="checkbox" {...rest} required={required} />
        {label}
      </label>
    </fieldset>
  );
}

export function FormButton({ children, ...rest }) {
  return (
    <button className={styles.FormButton} {...rest}>
      {children}
    </button>
  );
}


