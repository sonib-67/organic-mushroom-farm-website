import React, { useState, useEffect, forwardRef, useImperativeHandle } from 'react';
import { RefreshCw, CheckCircle2, ShieldCheck } from 'lucide-react';

export interface ReCaptchaWrapperRef {
  reset: () => void;
}

interface ReCaptchaWrapperProps {
  onChange: (token: string | null) => void;
}

const ReCaptchaWrapper = forwardRef<ReCaptchaWrapperRef, ReCaptchaWrapperProps>(({ onChange }, ref) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [answer, setAnswer] = useState('');
  const [isValid, setIsValid] = useState(false);

  const generateMathProblem = () => {
    setNum1(Math.floor(Math.random() * 10) + 1);
    setNum2(Math.floor(Math.random() * 10) + 1);
    setAnswer('');
    setIsValid(false);
    onChange(null);
  };

  useEffect(() => {
    generateMathProblem();
  }, []);

  useImperativeHandle(ref, () => ({
    reset: () => {
      generateMathProblem();
    }
  }));

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setAnswer(val);
    
    // Check if the answer is correct
    if (val.trim() !== '' && parseInt(val) === num1 + num2) {
      setIsValid(true);
      onChange('custom-captcha-verified');
    } else {
      setIsValid(false);
      onChange(null);
    }
  };

  return (
    <div className="flex flex-col items-start gap-1 w-full max-w-xs mb-2">
      <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider flex items-center gap-1">
        <ShieldCheck className="w-3 h-3" />
        Security Check
      </label>
      <div className="flex items-center gap-3 p-2.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl w-full shadow-sm transition-all">
        {isValid ? (
          <div className="flex items-center gap-2 text-green-600 dark:text-green-400 w-full justify-center py-1">
            <CheckCircle2 className="w-5 h-5" />
            <span className="text-sm font-medium">Verified successfully!</span>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-medium text-sm whitespace-nowrap ml-1">
              <span>{num1}</span>
              <span>+</span>
              <span>{num2}</span>
              <span>=</span>
            </div>
            <input
              type="number"
              value={answer}
              onChange={handleInputChange}
              className="w-16 bg-slate-50 dark:bg-[#0A0A0A] border border-slate-200 dark:border-white/20 rounded-lg py-1.5 px-2 text-center text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-start/50 text-sm"
              placeholder="?"
            />
            <button
              type="button"
              onClick={generateMathProblem}
              className="ml-auto p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors bg-slate-50 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10"
              title="Change numbers"
            >
              <RefreshCw className="w-3.5 h-3.5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
});

ReCaptchaWrapper.displayName = 'ReCaptchaWrapper';
export default ReCaptchaWrapper;
