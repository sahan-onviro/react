import React, { useEffect, useMemo, useState, useCallback } from "react";
import UseGet from "../Global/Api/UseGet";
import { triviaCategories } from "../Global/Data/Data";

type QuizData = {
  response_code: number;
  results: Array<{
    category: string;
    type: string;
    difficulty: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }>;
};

const shuffleArray = (array: string[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const Quiz = () => {
  const [formData, setFormData] = useState({
    question: 10,
    category: "any",
    difficulty: "any",
  });
  const [url, setUrl] = useState<string>("");
  const [points, setPoints] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [view, setView] = useState<number>(1);
  const [resetPopup, setResetPopup] = useState<boolean>(false);
  const { data: quizData } = UseGet<QuizData>(url);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setResetPopup(false);
      const newUrl = `https://opentdb.com/api.php?amount=${formData.question}${
        formData.category === "any" ? "" : `&category=${formData.category}`
      }${
        formData.difficulty === "any" ? "" : `&difficulty=${formData.difficulty}`
      }`;
      setUrl(newUrl);
      setCurrentPage(1);
      setPoints(0);
      setView(1);
    },
    [formData]
  );

  const totalPoints = quizData?.results?.length ?? 0;

  // Shuffle answers once when data is fetched
  const shuffledQuizData = useMemo(() => {
    return quizData?.results?.map((item) => ({
      ...item,
      answers: shuffleArray([
        ...item.incorrect_answers,
        item.correct_answer,
      ]),
    }));
  }, [quizData]);

  const currentQuiz = useMemo(() => {
    const start = (currentPage - 1) * view;
    return shuffledQuizData?.slice(start, start + view);
  }, [currentPage, shuffledQuizData, view]);

  const gotoNext = useCallback(() => {
    setCurrentPage((prev) => {
      if (prev < totalPoints) {
        return prev + 1;
      } else {
        setResetPopup(true);
        return prev;
      }
    });
  }, [totalPoints]);

  const handleAnswerClick = useCallback(
    (selectedAnswer: string, correctAnswer: string) => {
      if (selectedAnswer === correctAnswer) {
        setPoints((prev) => prev + 1);
      }
      gotoNext();
    },
    [gotoNext]
  );

  return (
    <section className="Quiz-section">
      <div className="max-w-[1200px] mx-auto py-16">
        <form
          onSubmit={handleSubmit}
          className="bg-slate-500 rounded-xl p-6 flex gap-4 justify-between"
        >
          <div className="form-group">
            <label htmlFor="question" className="text-white font-medium">
              Number of Questions
            </label>
            <input
              type="number"
              onChange={handleInputChange}
              name="question"
              value={formData.question}
              min={10}
              max={50}
              className="h-10 ml-1 rounded-md px-1"
            />
          </div>
          <div className="form-group">
            <label htmlFor="category" className="text-white font-medium">
              Select Category
            </label>
            <select
              name="category"
              id="category"
              onChange={handleInputChange}
              value={formData.category}
              className="h-10 ml-1 rounded-md px-1"
            >
              {triviaCategories?.map((item, index) => (
                <option value={item?.value} key={index}>
                  {item?.label}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="difficulty" className="text-white font-medium">
              Select Difficulty:
            </label>
            <select
              name="difficulty"
              onChange={handleInputChange}
              value={formData.difficulty}
              className="h-10 ml-1 rounded-md px-1"
            >
              <option value="any">Any Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="btn-wrapper">
            <button
              type="submit"
              className="bg-slate-600 py-2 h-full px-8 text-white font-medium rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
        {shuffledQuizData && (
          <div className="relative quiz-box max-w-[800px] mx-auto text-center shadow-lg rounded-xl border mt-16 p-6">
            {resetPopup ? (
              <div>
                <h1 className="text-2xl mb-2 font-medium">Total Quiz Points</h1>
                <h2 className="text-red-500 text-3xl font-bold">{points}</h2>
              </div>
            ) : (
              currentQuiz?.map((item, index) => (
                <React.Fragment key={index}>
                  <h1 className="font-bold text-3xl mb-3 underline">
                    Quiz {currentPage}
                  </h1>
                  <div className="quiz-wrapper">
                    <h5 className="text-lg font-medium mb-6">
                      {item?.question}
                    </h5>
                    <ul className="flex gap-4 flex-wrap justify-between text-left">
                      {item.answers.map((answer, idx) => (
                        <li key={idx}>
                          <span
                            onClick={() =>
                              handleAnswerClick(answer, item?.correct_answer)
                            }
                            className={`inline-block cursor-pointer relative pl-6 duration-300 after:absolute after:opacity-0 hover:after:opacity-100 after:border-r-2 after:border-b-2 after:rotate-45 after:w-[5px] after:h-[10px] after:left-[5px] after:top-[6px] after:border-red-500 before:absolute before:w-4 before:h-4 before:border-red-500 before:rounded-sm before:border before:left-0 before:top-[3px]`}
                          >
                            {answer}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </React.Fragment>
              ))
            )}
            {!resetPopup && (
              <div className="absolute left-[102%] top-0 font-bold text-4xl border-red-500 rounded-full border-2 w-28 h-28 pt-[8px] pr-[12px]">
                <h2 className="relative before:absolute before:inset-x-0 before:border before:-rotate-[30deg] before:border-red-500 before:top-[40px] before:w-[90%] before:mx-auto before:left-2">
                  {points}
                  <b className="block pl-6">{totalPoints}</b>
                </h2>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Quiz;
