import React, { useState, useEffect } from 'react';
import { Check, X, RefreshCw, HelpCircle, BarChart, PieChart, LineChart, ScatterChart as ScatterPlot } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  image?: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Which chart type is best for showing the composition of a whole?",
    options: ["Line Chart", "Bar Chart", "Pie Chart", "Scatter Plot"],
    correctAnswer: 2,
    explanation: "Pie charts are ideal for showing how different parts make up a whole. They work best when you have a small number of categories and want to emphasize proportions.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 2,
    question: "When would you use a scatter plot?",
    options: [
      "To show trends over time", 
      "To compare categories", 
      "To examine relationships between two variables", 
      "To show parts of a whole"
    ],
    correctAnswer: 2,
    explanation: "Scatter plots are perfect for examining relationships or correlations between two numerical variables. They help identify patterns, clusters, and outliers in the data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 3,
    question: "What is the primary purpose of a heat map?",
    options: [
      "To show geographical data", 
      "To visualize values in a matrix using colors", 
      "To compare categories over time", 
      "To show distribution of a single variable"
    ],
    correctAnswer: 1,
    explanation: "Heat maps use color intensity to represent values in a matrix format. They're excellent for visualizing complex data patterns and identifying areas of high and low values.",
    image: "https://images.unsplash.com/photo-1543286386-2e659306cd6c?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 4,
    question: "Which statistical measure is most resistant to outliers?",
    options: ["Mean", "Median", "Mode", "Range"],
    correctAnswer: 1,
    explanation: "The median is more resistant to outliers than the mean because it represents the middle value of the data set. Extreme values don't affect it as much as they do the mean.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 5,
    question: "What does a box plot (box-and-whisker plot) show?",
    options: [
      "Only the mean and standard deviation", 
      "Distribution, median, quartiles, and outliers", 
      "Correlation between variables", 
      "Categorical comparisons"
    ],
    correctAnswer: 1,
    explanation: "Box plots show the distribution of data based on a five-number summary: minimum, first quartile (Q1), median, third quartile (Q3), and maximum. They're excellent for comparing distributions and identifying outliers.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 6,
    question: "When would you use a histogram?",
    options: [
      "To show the distribution of a continuous variable", 
      "To compare different categories", 
      "To show parts of a whole", 
      "To show relationships between variables"
    ],
    correctAnswer: 0,
    explanation: "Histograms show the distribution of a continuous variable by dividing it into bins and counting the frequency in each bin. They're useful for understanding the shape, center, and spread of data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 7,
    question: "What is the main purpose of data normalization?",
    options: [
      "To remove outliers", 
      "To bring different variables to a similar scale", 
      "To transform data into a normal distribution", 
      "To reduce the number of variables"
    ],
    correctAnswer: 1,
    explanation: "Data normalization brings different variables to a similar scale (typically 0-1 or -1 to 1). This is important for algorithms that are sensitive to the scale of input features, like k-means clustering or neural networks.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 8,
    question: "Which chart type is best for showing trends over time?",
    options: ["Pie Chart", "Bar Chart", "Line Chart", "Scatter Plot"],
    correctAnswer: 2,
    explanation: "Line charts excel at showing trends over time. They connect data points with lines, making it easy to visualize changes, patterns, and trends in sequential data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 9,
    question: "What does a high R-squared value indicate in regression analysis?",
    options: [
      "The model is overfitting", 
      "The model explains a large portion of the variance", 
      "The model has many predictors", 
      "The data has many outliers"
    ],
    correctAnswer: 1,
    explanation: "A high R-squared value indicates that the regression model explains a large portion of the variance in the dependent variable. It ranges from 0 to 1, with higher values suggesting a better fit.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  },
  {
    id: 10,
    question: "When would you use a stacked bar chart?",
    options: [
      "To show parts of a whole across categories", 
      "To compare individual values", 
      "To show distribution of a variable", 
      "To show correlation"
    ],
    correctAnswer: 0,
    explanation: "Stacked bar charts show parts of a whole across different categories. They're useful when you want to display both the total value and the composition of each category.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
  }
];

export function DataVizKnowledgeGame() {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [gameComplete, setGameComplete] = useState<boolean>(false);
  const [showExplanation, setShowExplanation] = useState<boolean>(false);

  const shuffleQuestions = () => {
    return [...questions].sort(() => Math.random() - 0.5).slice(0, 5);
  };

  const [gameQuestions, setGameQuestions] = useState<Question[]>(shuffleQuestions());

  const resetGame = () => {
    setGameQuestions(shuffleQuestions());
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setSelectedOption(null);
    setGameComplete(false);
    setShowExplanation(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    if (showAnswer) return;
    
    setSelectedOption(optionIndex);
    setShowAnswer(true);
    
    if (optionIndex === gameQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowAnswer(false);
    setSelectedOption(null);
    setShowExplanation(false);
    
    if (currentQuestion < gameQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setGameComplete(true);
    }
  };

  const getChartIcon = (questionId: number) => {
    switch (questionId % 4) {
      case 0: return <BarChart className="w-6 h-6 text-blue-600" />;
      case 1: return <PieChart className="w-6 h-6 text-blue-600" />;
      case 2: return <LineChart className="w-6 h-6 text-blue-600" />;
      case 3: return <ScatterPlot className="w-6 h-6 text-blue-600" />;
      default: return <BarChart className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Data Visualization Knowledge Quiz</h3>
        <div className="text-sm text-gray-600">
          Score: {score}/{gameQuestions.length}
        </div>
      </div>

      {!gameComplete ? (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              {getChartIcon(gameQuestions[currentQuestion].id)}
              <h4 className="text-lg font-medium text-gray-800">
                Question {currentQuestion + 1} of {gameQuestions.length}
              </h4>
            </div>
            <p className="text-gray-700 text-lg mb-4">{gameQuestions[currentQuestion].question}</p>
            
            {gameQuestions[currentQuestion].image && (
              <div className="mb-4 rounded-lg overflow-hidden h-48">
                <img 
                  src={gameQuestions[currentQuestion].image} 
                  alt="Question visualization" 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-3">
              {gameQuestions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={showAnswer}
                  className={`w-full text-left p-4 rounded-lg transition-colors ${
                    selectedOption === index
                      ? index === gameQuestions[currentQuestion].correctAnswer
                        ? 'bg-green-100 border border-green-300'
                        : 'bg-red-100 border border-red-300'
                      : showAnswer && index === gameQuestions[currentQuestion].correctAnswer
                        ? 'bg-green-100 border border-green-300'
                        : 'bg-gray-50 border border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3">{String.fromCharCode(65 + index)}.</span>
                    <span>{option}</span>
                    {showAnswer && index === gameQuestions[currentQuestion].correctAnswer && (
                      <Check className="ml-auto text-green-600" size={20} />
                    )}
                    {showAnswer && selectedOption === index && index !== gameQuestions[currentQuestion].correctAnswer && (
                      <X className="ml-auto text-red-600" size={20} />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {showAnswer && (
            <div className="mb-6">
              <button
                onClick={() => setShowExplanation(!showExplanation)}
                className="flex items-center text-blue-600 hover:text-blue-800 mb-2"
              >
                <HelpCircle size={16} className="mr-1" />
                {showExplanation ? 'Hide Explanation' : 'Show Explanation'}
              </button>
              
              {showExplanation && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-gray-700">{gameQuestions[currentQuestion].explanation}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between">
            {showAnswer ? (
              <button
                onClick={handleNextQuestion}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                {currentQuestion < gameQuestions.length - 1 ? 'Next Question' : 'See Results'}
              </button>
            ) : (
              <div></div>
            )}
            
            <button
              onClick={resetGame}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center"
            >
              <RefreshCw size={16} className="mr-2" />
              New Quiz
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <h4 className="text-2xl font-bold text-gray-800 mb-4">Quiz Complete!</h4>
          <p className="text-lg text-gray-600 mb-6">
            You scored {score} out of {gameQuestions.length}
            {score === gameQuestions.length && ' - Perfect score!'}
          </p>
          
          <div className="mb-8">
            {score / gameQuestions.length >= 0.8 ? (
              <div className="bg-green-100 p-4 rounded-lg text-green-800">
                Great job! You have excellent knowledge of data visualization concepts.
              </div>
            ) : score / gameQuestions.length >= 0.6 ? (
              <div className="bg-blue-100 p-4 rounded-lg text-blue-800">
                Good work! You have a solid understanding of data visualization.
              </div>
            ) : (
              <div className="bg-yellow-100 p-4 rounded-lg text-yellow-800">
                Keep learning! Data visualization is a fascinating field with many concepts to master.
              </div>
            )}
          </div>
          
          <button
            onClick={resetGame}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}