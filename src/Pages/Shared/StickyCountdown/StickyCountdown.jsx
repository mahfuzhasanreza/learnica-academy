import React, { useState, useEffect } from 'react';
import { Clock, X } from 'lucide-react';

const StickyCountdown = () => {
    // Set target date: 7 days from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);
    targetDate.setHours(23, 59, 59, 999);

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const [isExpired, setIsExpired] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const target = targetDate.getTime();
            const difference = target - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
                setIsExpired(false);
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                setIsExpired(true);
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    const formatTime = () => {
        if (isExpired) return "0d:0h";
        return `${timeLeft.days}d:${timeLeft.hours}h:${timeLeft.minutes}m:${timeLeft.seconds}s`;
    };

    if (!isVisible) return null;

    if (isExpired) {
        return (
            <div className="fixed top-4 right-4 z-50 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-3 rounded-lg shadow-2xl border border-red-400 max-w-sm animate-pulse">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold text-sm">Offer Expired!</span>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="text-white hover:text-red-200 transition-colors"
                    >
                        <X className="w-4 h-4" />
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-yellow-700 via-orange-600 to-red-600 text-white px-4 py-3 rounded-lg shadow-2xl border border-yellow-600 max-w-sm backdrop-blur-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 animate-pulse" />
              <span className="font-semibold text-sm">Offer Closes In:</span>
            </div>
            <button 
              onClick={() => setIsVisible(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          
          <div className="text-center mb-3">
            <div className="font-mono text-lg font-bold tracking-wider bg-black bg-opacity-30 px-3 py-2 rounded-md backdrop-blur-sm">
              {formatTime()}
            </div>
          </div>
          
          <button className="w-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-semibold py-2 px-4 rounded-md transition-all duration-200 text-sm backdrop-blur-sm border border-white border-opacity-30 hover:scale-105 transform">
            Enroll Courses
          </button>
        </div>
      );
    };

export default StickyCountdown;
