import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export interface ReCaptchaWrapperProps {
  onChange: (token: string | null) => void;
}

export interface ReCaptchaWrapperRef {
  reset: () => void;
}

const ReCaptchaWrapper = forwardRef<ReCaptchaWrapperRef, ReCaptchaWrapperProps>(
  ({ onChange }, ref) => {
    const recaptchaRef = useRef<ReCAPTCHA>(null);

    useImperativeHandle(ref, () => ({
      reset: () => {
        recaptchaRef.current?.reset();
      },
    }));

    // Make sure you have NEXT_PUBLIC_RECAPTCHA_SITE_KEY or VITE_RECAPTCHA_SITE_KEY in your env
    const siteKey =
      ((import.meta as any).env?.VITE_RECAPTCHA_SITE_KEY) ||
      process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
      "6LfRrJUtAAAAANYz3gMiacdqVCl2-qs9pR7O1ox9"; // Fallback to your provided key

    return (
      <div className="my-4">
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={siteKey}
          onChange={onChange}
        />
      </div>
    );
  }
);

ReCaptchaWrapper.displayName = 'ReCaptchaWrapper';

export default ReCaptchaWrapper;
