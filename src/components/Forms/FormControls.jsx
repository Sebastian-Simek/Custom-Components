export function InputControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <input {...rest}/> 
    </label>
  );
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
