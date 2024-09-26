import PropTypes from "prop-types";

export default function TextArea({ label, name, value, onChange }) {
  return (
    <label>
      {label}
      <textarea name={name} rows="10" value={value} onChange={onChange} placeholder="You can complain here"></textarea>
    </label>
  );
}

TextArea.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};