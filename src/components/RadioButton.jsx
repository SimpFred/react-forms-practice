import PropTypes from "prop-types";

export default function RadioButton({ label, name, value, checked, onChange }) {
  return (
    <label>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

RadioButton.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};