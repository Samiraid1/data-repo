import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Check } from 'lucide-react';

interface DataPoint {
  x: number;
  y: number;
}

export function CorrelationGame() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [userGuess, setUserGuess] = useState<number>(0);
  const [actualCorrelation, setActualCorrelation] = useState<number>(0);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const generateData = useCallback(() => {
    const correlation = Math.random() * 2 - 1; // Random correlation between -1 and 1
    setActualCorrelation(correlation);

    // Generate correlated random data
    const n = 50;
    const data: DataPoint[] = [];
    
    for (let i = 0; i < n; i++) {
      const x = Math.random();
      const y = correlation * x + Math.sqrt(1 - correlation * correlation) * Math.random();
      data.push({ x, y });
    }

    setData(data);
    setShowResult(false);
    setUserGuess(0);
  }, []);

  useEffect(() => {
    generateData();
  }, [generateData]);

  const handleSubmit = () => {
    setShowResult(true);
    setAttempts(prev => prev + 1);
    
    // Calculate score based on how close the guess was
    const error = Math.abs(actualCorrelation - userGuess);
    if (error < 0.1) {
      setScore(prev => prev + 3);
    } else if (error < 0.2) {
      setScore(prev => prev + 2);
    } else if (error < 0.3) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Correlation Estimation Game</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Score: {score}</span>
          <span className="text-sm text-gray-600">Attempts: {attempts}</span>
        </div>
      </div>

      <div className="relative aspect-square w-full max-w-lg mx-auto mb-6 bg-gray-50 rounded-lg p-4">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {/* Axes */}
          <line x1="10" y1="90" x2="90" y2="90" stroke="black" strokeWidth="0.5" />
          <line x1="10" y1="10" x2="10" y2="90" stroke="black" strokeWidth="0.5" />
          
          {/* Data points */}
          {data.map((point, i) => (
            <circle
              key={i}
              cx={point.x * 80 + 10}
              cy={90 - point.y * 80}
              r="0.8"
              className="fill-blue-600"
            />
          ))}
        </svg>
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Estimate the correlation (-1 to 1):
        </label>
        <input
          type="range"
          min="-1"
          max="1"
          step="0.1"
          value={userGuess}
          onChange={(e) => setUserGuess(parseFloat(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
        />
        <div className="text-center mt-2 text-gray-600">
          {userGuess.toFixed(2)}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <button
          onClick={handleSubmit}
          disabled={showResult}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 flex items-center"
        >
          <Check size={16} className="mr-2" />
          Check Answer
        </button>
        
        <button
          onClick={generateData}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center"
        >
          <RefreshCw size={16} className="mr-2" />
          New Data
        </button>
      </div>

      {showResult && (
        <div className={`mt-4 p-4 rounded-lg ${Math.abs(actualCorrelation - userGuess) < 0.2 ? 'bg-green-100' : 'bg-orange-100'}`}>
          <p className="text-sm">
            Actual correlation: <strong>{actualCorrelation.toFixed(2)}</strong>
            <br />
            Your guess: <strong>{userGuess.toFixed(2)}</strong>
            <br />
            Difference: <strong>{Math.abs(actualCorrelation - userGuess).toFixed(2)}</strong>
          </p>
        </div>
      )}
    </div>
  );
}