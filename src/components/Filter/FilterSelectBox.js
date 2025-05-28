import Select from 'react-select'; // 또는 MUI, HeadlessUI 등
import './FilterSelectBox.css';

const FilterSelectBox = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div className="filter-select-container">
      <label className="filter-select-label">{label}</label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={onChange}
        placeholder="선택하세요"
        classNamePrefix="select"
      />
    </div>
  );
};

export default FilterSelectBox;
