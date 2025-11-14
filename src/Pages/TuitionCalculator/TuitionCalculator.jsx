import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import circleText from '../../assets/lottie/CircleText.json';

// Program data based on UIU official information
const programData = {
  undergraduate: [
    { name: 'BBA', perCreditFee: 6500 },
    { name: 'BBA in AIS', perCreditFee: 6500 },
    { name: 'BSECO', perCreditFee: 6500 },
    { name: 'BSSEDS', perCreditFee: 6500 },
    { name: 'BSCSE', perCreditFee: 6500 },
    { name: 'BSDS', perCreditFee: 6500 },
    { name: 'BSEEE', perCreditFee: 6500 },
    { name: 'BSc Civil', perCreditFee: 6500 },
    { name: 'B.Pharm', perCreditFee: 6500 },
    { name: 'BA English', perCreditFee: 5525 },
    { name: 'BSSMSJ', perCreditFee: 5525 },
    { name: 'BSBGE', perCreditFee: 6500 },
  ],
  graduate: [
    { name: 'MBA', perCreditFee: 6500 },
    { name: 'EMBA', perCreditFee: 6500 },
    { name: 'MSECO', perCreditFee: 6500 },
    { name: 'MDS', perCreditFee: 6500 },
    { name: 'MSCSE', perCreditFee: 6500 },
  ],
};

const TuitionCalculator = () => {
  const [programType, setProgramType] = useState('undergraduate');
  const [selectedProgram, setSelectedProgram] = useState('');
  const [credits, setCredits] = useState('');
  const [waiver, setWaiver] = useState('');
  const [scholarship, setScholarship] = useState('');
  const [result, setResult] = useState(null);

  const handleProgramTypeChange = (type) => {
    setProgramType(type);
    setSelectedProgram('');
    setResult(null);
  };

  const handleProgramChange = (program) => {
    setSelectedProgram(program);
    setResult(null);
  };

  const calculateFee = () => {
    const creditNum = parseFloat(credits);
    const waiverNum = parseFloat(waiver) || 0;
    const scholarshipNum = parseFloat(scholarship) || 0;

    if (!credits || creditNum <= 0) {
      alert('Please enter valid credits');
      return;
    }

    const programInfo = programData[programType].find(p => p.name === selectedProgram);
    if (!programInfo) {
      alert('Please select a program');
      return;
    }

    // Base calculation
    const perCreditFee = programInfo.perCreditFee;
    const trimesterFee = programType === 'undergraduate' ? 6500 : 0;
    
    // Total tuition without discount
    const totalTuitionFee = creditNum * perCreditFee;
    
    // Calculate best discount (either waiver or scholarship, not both)
    const bestDiscount = Math.max(waiverNum, scholarshipNum);
    
    // Apply discount to tuition fee only
    const discountAmount = (totalTuitionFee * bestDiscount) / 100;
    const tuitionAfterDiscount = totalTuitionFee - discountAmount;
    
    // Add trimester fee (not discounted)
    const totalPayable = tuitionAfterDiscount + trimesterFee;
    const grandTotal = totalTuitionFee + trimesterFee;

    setResult({
      perCreditFee,
      totalCredits: creditNum,
      tuitionFeeBeforeDiscount: totalTuitionFee,
      trimesterFee,
      appliedDiscount: bestDiscount,
      discountAmount,
      tuitionAfterDiscount,
      totalPayable,
      grandTotal,
      savedAmount: grandTotal - totalPayable,
    });
  };

  const resetCalculator = () => {
    setSelectedProgram('');
    setCredits('');
    setWaiver('');
    setScholarship('');
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "linear-gradient(45deg, #000000 0%, #0a0a0a 25%, #1a1a1a 50%, #0f0f0f 75%, #000000 100%)",
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
            filter: "blur(40px)"
          }}
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -50, 100, 0],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute bottom-20 right-20 w-72 h-72 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(236, 72, 153, 0.2) 0%, rgba(139, 92, 246, 0.1) 40%, transparent 70%)",
            filter: "blur(30px)"
          }}
          animate={{
            x: [0, -80, 60, 0],
            y: [0, 80, -40, 0],
            scale: [1, 0.7, 1.4, 1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          className="mb-16 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <h1 className="text-5xl md:text-6xl font-extrabold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                UIU Tuition
              </span>
              <span className="relative inline-block mx-3">
                <span className="z-10 text-white relative">Fee</span>
                <Lottie
                  animationData={circleText}
                  loop={true}
                  className="absolute top-1/2 left-1/2 w-48 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                />
              </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500">
                Calculator
              </span>
            </h1>
          </div>
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          >
            Calculate your trimester/semester tuition fees with waiver and scholarship benefits for UIU
          </motion.p>
        </motion.div>

        {/* Calculator Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12">
            {/* Program Type Selection */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-4 text-gray-200">
                Select Program Type
              </label>
              <div className="flex gap-4">
                <button
                  onClick={() => handleProgramTypeChange('undergraduate')}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
                    programType === 'undergraduate'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Undergraduate
                </button>
                <button
                  onClick={() => handleProgramTypeChange('graduate')}
                  className={`flex-1 py-3 px-6 rounded-xl font-medium transition-all ${
                    programType === 'graduate'
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  Graduate
                </button>
              </div>
            </div>

            {/* Form Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Program Selection */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Select Program
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => handleProgramChange(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option value="" className="bg-gray-900">Select a program</option>
                  {programData[programType].map((program) => (
                    <option key={program.name} value={program.name} className="bg-gray-900">
                      {program.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Credits Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Credits for This Trimester/Semester
                </label>
                <input
                  type="number"
                  value={credits}
                  onChange={(e) => setCredits(e.target.value)}
                  placeholder="Enter credits (e.g., 12)"
                  min="1"
                  max="21"
                  step="0.5"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                />
                <p className="text-xs text-gray-400 mt-1">Typical: 9-15 credits per trimester</p>
              </div>

              {/* Waiver Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Waiver Percentage (%)
                </label>
                <select
                  value={waiver}
                  onChange={(e) => setWaiver(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option value="" className="bg-gray-900">No Waiver</option>
                  <option value="10" className="bg-gray-900">10%</option>
                  <option value="20" className="bg-gray-900">20%</option>
                  <option value="25" className="bg-gray-900">25%</option>
                  <option value="40" className="bg-gray-900">40%</option>
                  <option value="50" className="bg-gray-900">50%</option>
                  <option value="75" className="bg-gray-900">75%</option>
                  <option value="100" className="bg-gray-900">100%</option>
                </select>
              </div>

              {/* Scholarship Dropdown */}
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-300">
                  Scholarship Percentage (%)
                </label>
                <select
                  value={scholarship}
                  onChange={(e) => setScholarship(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                >
                  <option value="" className="bg-gray-900">No Scholarship</option>
                  <option value="25" className="bg-gray-900">25%</option>
                  <option value="50" className="bg-gray-900">50%</option>
                  <option value="75" className="bg-gray-900">75%</option>
                  <option value="100" className="bg-gray-900">100%</option>
                </select>
              </div>
            </div>

            {/* Info Message */}
            {(parseFloat(waiver) > 0 && parseFloat(scholarship) > 0) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl"
              >
                <p className="text-yellow-300 text-sm">
                  ℹ️ Note: As per UIU policy, only the best discount (either waiver or scholarship) will be applied, not both.
                </p>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mb-8">
              <button
                onClick={calculateFee}
                className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all transform hover:scale-105 shadow-lg"
              >
                Calculate Fee
              </button>
              <button
                onClick={resetCalculator}
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-all border border-white/20"
              >
                Reset
              </button>
            </div>

            {/* Result Display */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-indigo-900/40 to-purple-900/40 backdrop-blur-xl border border-indigo-500/30 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-300">
                  This Trimester's Fee Breakdown
                </h3>

                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-300">Per Credit Fee:</span>
                    <span className="text-white font-semibold">৳ {result.perCreditFee.toLocaleString()}</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-300">Credits This Trimester:</span>
                    <span className="text-white font-semibold">{result.totalCredits}</span>
                  </div>

                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="text-gray-300">Tuition Fee (Before Discount):</span>
                    <span className="text-white font-semibold">৳ {result.tuitionFeeBeforeDiscount.toLocaleString()}</span>
                  </div>

                  {result.trimesterFee > 0 && (
                    <div className="flex justify-between items-center pb-3 border-b border-white/10">
                      <span className="text-gray-300">Trimester Fee:</span>
                      <span className="text-white font-semibold">৳ {result.trimesterFee.toLocaleString()}</span>
                    </div>
                  )}

                  {result.appliedDiscount > 0 && (
                    <>
                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-gray-300">Applied Discount:</span>
                        <span className="text-green-400 font-semibold">{result.appliedDiscount}%</span>
                      </div>

                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-gray-300">Discount Amount:</span>
                        <span className="text-green-400 font-semibold">- ৳ {result.discountAmount.toLocaleString()}</span>
                      </div>

                      <div className="flex justify-between items-center pb-3 border-b border-white/10">
                        <span className="text-gray-300">Tuition After Discount:</span>
                        <span className="text-white font-semibold">৳ {result.tuitionAfterDiscount.toLocaleString()}</span>
                      </div>
                    </>
                  )}

                  <div className="flex justify-between items-center pt-4 pb-3 border-t-2 border-indigo-500/50">
                    <span className="text-xl font-bold text-white">Total Payable:</span>
                    <span className="text-2xl font-extrabold text-green-400">
                      ৳ {result.totalPayable.toLocaleString()}
                    </span>
                  </div>

                  {result.savedAmount > 0 && (
                    <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-center">
                      <p className="text-green-300 font-semibold">
                        🎉 You saved ৳ {result.savedAmount.toLocaleString()} with your discount!
                      </p>
                    </div>
                  )}

                  {result.appliedDiscount === 0 && (
                    <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                      <p className="text-blue-300 text-sm text-center">
                        💡 Total amount without any waiver or scholarship
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h4 className="text-lg font-bold mb-3 text-indigo-300">Important Notes:</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• This calculates fees for a single trimester/semester based on your enrolled credits</li>
              <li>• Waiver and Scholarship percentages apply only to tuition fees, not to trimester/semester fees</li>
              <li>• Students eligible for both waiver and scholarship can only avail the best one (UIU Policy)</li>
              <li>• Admission fee (৳20,000), lab fees, and other charges are not included in this calculation</li>
              <li>• This calculator is based on UIU official fee structure for Spring 2025 onwards</li>
              <li>• For complete fee details, visit: <a href="https://www.uiu.ac.bd/admission/tuition-fees-payment-policies/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:underline">UIU Official Website</a></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TuitionCalculator;
