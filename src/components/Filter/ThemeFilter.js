import React, { useState, useEffect } from 'react';
import FilterSelectBox from './FilterSelectBox';

const ThemeFilter = () => {
  // 테마 필터
  const [illust, setIllust] = useState([]);
  const [swim, setSwim] = useState([]);
  const [rare, setRare] = useState([]);
  const [unique, setUnique] = useState([]);

  const illustrationOptions = [
    { value: 'illust1', label: '일러압1' },
    { value: 'illust2', label: '일러압2' },
  ];

  const swimOptions = [
    { value: '2017', label: '해변의 랩소디(2017)' },
    { value: '2018', label: '선샤인 웨이브(2018)' },
  ];

  const rareOptions = [
    { value: '01', label: '암흑의 광휘' },
    { value: '02', label: '사이버네틱' },
    { value: '03', label: '지고의 날개' },
    { value: '04', label: '칠흑의 날개' },
    { value: '05', label: '드래고니안' },
  ]

  const uniqueOptions = [
    { value: '01', label: '샤이닝 스타' },
    { value: '02', label: '솔로몬의 예복' },
    { value: '03', label: '휠 오브 트리니티' },
    { value: '04', label: '황천의 사자' },
  ]

  return (
    <div>
      <FilterSelectBox
        label="일러스트 아바타"
        options={illustrationOptions}
        selectedOptions={illust}
        onChange={setIllust}
      />
      <FilterSelectBox
        label="수영복"
        options={swimOptions}
        selectedOptions={swim}
        onChange={setSwim}
      />
      <FilterSelectBox
        label="레어 아바타"
        options={rareOptions}
        selectedOptions={rare}
        onChange={setRare}
      />
      <FilterSelectBox
        label="유니크 아바타"
        options={uniqueOptions}
        selectedOptions={unique}
        onChange={setUnique}
      />
    </div>
  );
};

export default ThemeFilter;
