import "../styles/styles.css";

const InputSelect = ({ label, options, handleClick }) => {
  return (
    <div>
      <label className="details">{label}</label>
      <select name={label} onChange={(e) => handleClick(e.target.value)}>
        {options.map((item) => (
          <option key={item.key}>{item.label}</option>
        ))}
      </select>
    </div>
  );
};

export default InputSelect;
