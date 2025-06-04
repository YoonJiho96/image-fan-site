import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import teamsData from "../../assets/filter-char.json"; // JSON 파일 가져오기
import "./Filter.css";

const CharacterFilter = forwardRef(({ onFilterChange }, ref) => {
  const [selectedTeams, setSelectedTeams] = useState({});
  const [selectedCharacters, setSelectedCharacters] = useState({});

  const initializeFilters = () => {
    const initialTeams = {};
    const initialCharacters = {};
    Object.keys(teamsData).forEach((team) => {
      initialTeams[team] = false;
      teamsData[team].characters.forEach((char) => (initialCharacters[char.name] = false));
    });
    setSelectedTeams(initialTeams);
    setSelectedCharacters(initialCharacters);
  };

  useImperativeHandle(ref, () => ({
    initializeFilters
  }));

  useEffect(() => {
    initializeFilters();
  }, []);

  const handleTeamSelect = (team) => {
    const isSelected = !selectedTeams[team];
    setSelectedTeams((prev) => ({ ...prev, [team]: isSelected }));

    const updatedCharacters = { ...selectedCharacters };
    teamsData[team].characters.forEach((char) => {
      updatedCharacters[char.name] = isSelected;
    });
    setSelectedCharacters(updatedCharacters);
  };

  const handleCharacterSelect = (char, team) => {
    const updatedCharacters = {
      ...selectedCharacters,
      [char]: !selectedCharacters[char],
    };

    const allSelected = teamsData[team].characters.every((c) => updatedCharacters[c.name]);
    const noneSelected = teamsData[team].characters.every((c) => !updatedCharacters[c.name]);

    setSelectedCharacters(updatedCharacters);
    setSelectedTeams((prev) => ({
      ...prev,
      [team]: allSelected ? true : noneSelected ? false : prev[team],
    }));
  };

  useEffect(() => {
    const activeCharacters = Object.keys(selectedCharacters).filter((char) => selectedCharacters[char]);
    onFilterChange('characters', activeCharacters);
  }, [selectedCharacters, onFilterChange]);

  return (
    <div className="char-filter">
      <div className="filter-header">
        <h2 className="side-panel-title">캐릭터</h2>
        <button 
          className="reset-button"
          onClick={initializeFilters}
          title="필터 초기화"
        >
          초기화
        </button>
      </div>
      {Object.keys(teamsData).map((team) => (
        <div key={team} className="team-container">
          {/* 팀 버튼 */}
          <button
            className={`team-button ${selectedTeams[team] ? "active" : ""}`}
            onClick={() => handleTeamSelect(team)}
            data-tooltip={team}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}${teamsData[team].image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* 팀 이미지 */}
          </button>

          {/* 캐릭터 버튼 */}
          <div className="characters">
            {teamsData[team].characters.map((char) => (
              <button
                key={char.name}
                className={`char-button ${selectedCharacters[char.name] ? "active" : ""}`}
                onClick={() => handleCharacterSelect(char.name, team)}
                data-tooltip={char.name}
                style={{
                  backgroundImage: `url(${process.env.PUBLIC_URL}${char.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* 캐릭터 이미지 */}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
});

export default CharacterFilter;
