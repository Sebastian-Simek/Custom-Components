export function InputControl({ label, ...rest }) {
  return (
    <label>
      {label}
      <input {...rest}/> 
    </label>
  );
}

export function TextAreaControl() {
  return (
    <label>
        Bio
      <textarea  />
    </label>

  );
}
