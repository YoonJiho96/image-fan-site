import React, { useState, useEffect } from "react";
import teamsData from "./filter-char.json"; // JSON 파일 가져오기
import "./Filter.css";

const CharacterFilter = ({ onFilterChange }) => {
  const [selectedTeams, setSelectedTeams] = useState({});
  const [selectedCharacters, setSelectedCharacters] = useState({});

  useEffect(() => {
    const initialTeams = {};
    const initialCharacters = {};
    Object.keys(teamsData).forEach((team) => {
      initialTeams[team] = false;
      teamsData[team].characters.forEach((char) => (initialCharacters[char.name] = false));
    });
    setSelectedTeams(initialTeams);
    setSelectedCharacters(initialCharacters);
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
    onFilterChange(activeCharacters);
  }, [selectedCharacters, onFilterChange]);

  return (
    <div className="char-filter">
      {Object.keys(teamsData).map((team) => (
        <div key={team} className="team-container">
          {/* 팀 버튼 */}
          <button
            className={`team-button ${selectedTeams[team] ? "active" : ""}`}
            onClick={() => handleTeamSelect(team)}
            data-tooltip={team}
            style={{ backgroundImage: `url(${teamsData[team].image})` }}
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
                style={{ backgroundImage: `url(${char.image})` }}
              >
                {/* 캐릭터 이미지 */}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CharacterFilter;
