import React from "react";
import { useState, useEffect } from "react";
const Setting = () => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState(null);
  const [questionCategory, setQuestionCategory] = useState("");
  const [questionDifficulty, setQuestionDifficulty] = useState("");
  const [questionType, setQuestionType] = useState("");
  const [numberOfQuestions, setNumberOfQuestions] = useState(50);

  useEffect(() => {
    const apiUrl = `https://opentdb.com/api_category.php`;

    setLoading(true);

    fetch(apiUrl)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setOptions(response.trivia_categories);
      });
  }, [setOptions]);
  const handleCategoryChange = (event) => {
    setQuestionCategory(event.target.value);
  };
  const handleDifficultyChange = (event) => {
    setQuestionDifficulty(event.target.value);
  };
  const handleTypeChange = (event) => {
    setQuestionType(event.target.value);
  };
  const handleNumberOfQuestions = (event) => {
    setNumberOfQuestions(event.target.value);
  };
  if (!loading) {
    return (
      <>
        <h2>Select Category:</h2>
        <select value={questionCategory} onChange={handleCategoryChange}>
          <option>Alls</option>
          {options &&
            options.map((option) => (
              <option value={option.id} key={option.id}>
                {option.name}
              </option>
            ))}
        </select>
        <h2>Select Difficulty:</h2>
        <section value={questionDifficulty} onChange={handleDifficultyChange}>
          <option value="" key="difficulty-0">
            All
          </option>
          <option value="easy" key="difficulty-1">
            Easy
          </option>
          <option value="medium" key="difficulty-1">
            Medium
          </option>
          <option value="hard" key="difficulty-1">
            Hard
          </option>
        </section>
        <div>
          <h2>Select Question Type:</h2>
          <select value={questionType} onChange={handleTypeChange}>
            <option value="" key="type-0">
              All
            </option>
            <option value="multiple" key="type-1">
              Multiple Choice
            </option>
            <option value="boolean" key="type-2">
              True/False
            </option>
          </select>
        </div>
        <div>
          <h2>Amount of Questions:</h2>
          <input value={numberOfQuestions} onChange={handleNumberOfQuestions} />
        </div>
      </>
    );
  } else {
    <p>LOADING...</p>;
  }
};
export default Setting;
