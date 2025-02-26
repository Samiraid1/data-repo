import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCw, Check, TrendingUp, TrendingDown, Minus } from 'lucide-react';

interface DataPoint {
  x: number;
  y: number;
}

type Trend = 'increasing' | 'decreasing' | 'flat';

export function TrendSpotterGame() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [actualTrend, setActualTrend] = useState<Trend>('flat');
  const [userGuess, setUserGuess] = useState<Trend | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);

  const generateData = useCallback(() => {
    const trends: Trend[] = ['increasing', 'decreasing', 'flat'];
    const trend = trends[Math.floor(Math.random() * trends.length)];
    setActualTrend(trend);

    const n = 10;
    const data: DataPoint[] = [];
    const noise = 0.2;
    
    for (let i = 0; i < n; i++) {
      const x = i / (n - 1);
      let y = 0;
      
      switch (trend) {
        case 'increasing':
          y = 0.3 + 0.4 * x + (Math.random() - 0.5) * noise;
          break;
        case 'decreasing':
          y = 0.7 - 0.4 * x + (Math.random() - 0.5) * noise;
          break;
        case 'flat':
          y = 0.5 + (Math.random() - 0.5) * noise;
          break;
      }
      
      data.push({ x, y });
    }

    setData(data);
    setShowResult(false);
    setUserGuess(null);
  }, []);

  useEffect(() => {
    generateData();
  }, [generateData]);

  const handleGuess = (trend: Trend) => {
    setUserGuess(trend);
    setShowResult(true);
    setAttempts(prev => prev + 1);
    
    if (trend === actualTrend) {
      setScore(prev => prev + 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Trend Spotter</h3>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">Score: {score}</span>
          <span className="text-sm text-gray-600">Attempts: {attempts}</span>
        </div>
      </div>

      <div className="relative aspect-video w-full max-w-lg mx-auto mb-6 bg-gray-50 rounded-lg p-4">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          {/* Axes */}
          <line x1="10" y1="50" x2="90" y2="50" stroke="black" strokeWidth="0.5" />
          <line x1="10" y1="10" x2="10" y2="50" stroke="black" strokeWidth="0.5" />
          
          {/* Data points and line */}
          <polyline
            points={data.map(point => `${point.x * 80 + 10},${50 - point.y * 40}`).join(' ')}
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
          />
          {data.map((point, i) => (
            <circle
              key={i}
              cx={point.x * 80 + 10}
              cy={50 - point.y * 40}
              r="2"
              className="fill-blue-600"
            />
          ))}
        </svg>
      </div>

      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={() => handleGuess('increasing')}
          disabled={showResult}
          className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
            userGuess === 'increasing'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <TrendingUp size={20} />
          Increasing
        </button>
        <button
          onClick={() => handleGuess('flat')}
          disabled={showResult}
          className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
            userGuess === 'flat'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <Minus size={20} />
          Flat
        </button>
        <button
          onClick={() => handleGuess('decreasing')}
          disabled={showResult}
          className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-colors ${
            userGuess === 'decreasing'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <TrendingDown size={20} />
          Decreasing
        </button>
      </div>

      {showResult && (
        <div className={`mb-6 p-4 rounded-lg ${userGuess === actualTrend ? 'bg-green-100' : 'bg-orange-100'}`}>
          <p className="text-sm text-center">
            {userGuess === actualTrend ? (
              <span className="font-medium text-green-800">Correct! The trend was {actualTrend}.</span>
            ) : (
              <span className="font-medium text-orange-800">
                Not quite! The trend was {actualTrend}.
              </span>
            )}
          </p>
        </div>
      )}

      <div className="flex justify-center">
        <button
          onClick={generateData}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 flex items-center"
        >
          <RefreshCw size={16} className="mr-2" />
          New Data
        </button>
      </div>
    </div>
  );
}