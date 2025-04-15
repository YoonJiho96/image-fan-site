import Select from 'react-select'; // 또는 MUI, HeadlessUI 등

const customStyles = {
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused
        ? (state.isSelected ? '#ddd' : 'white') // 선택된 항목은 색상 유지
        : (state.isSelected ? '#ddd' : 'white'),
      color: 'black',
    }),
    container: (provided) => ({
        ...provided,
      }),
      valueContainer: (provided) => ({
        ...provided,
        flexWrap: 'wrap', // 줄바꿈 허용
        maxHeight: '100%', // 선택 값 많을 때 줄바꿈
        overflowY: 'auto',
        height: 'auto', // 높이 자동
        alignItems: 'flex-start',
        paddingTop: '4px',
        paddingBottom: '4px',
      }),
      multiValue: (provided) => ({
        ...provided,
        margin: '2px',
      }),
  };

const FilterSelectBox = ({ label, options, selectedOptions, onChange }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <label style={{ fontWeight: 'bold' }}>{label}</label>
      <Select
        isMulti
        options={options}
        value={selectedOptions}
        onChange={onChange}
        placeholder="선택하세요"
        styles={customStyles}
      />
    </div>
  );
};

export default FilterSelectBox;
