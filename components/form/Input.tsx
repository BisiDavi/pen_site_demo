export default function Input({ input }) {
  return (
    <div className="form-element">
      <label>{input.label}</label>
      <input name={input.name} type={input.contentType} />
    </div>
  );
}
