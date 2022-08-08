import '../styles/styles.css'


const InputField = ({ label, defaultvalue ,onChange,placeholder}) => {
  return (
    <div>
      <label className="details">{label}</label>
      <input
        onChange={(event) =>onChange(event.target.value)}
        type="text"
        value={defaultvalue}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
