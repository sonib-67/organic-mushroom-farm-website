import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SafeNavigate({ to, replace = true }: { to: string; replace?: boolean }) {
  const navigate = useNavigate();
  const isServer = typeof window === 'undefined';

  useEffect(() => {
    navigate(to, { replace });
  }, [navigate, to, replace]);

  if (isServer) {
    return (
      <div style={{ display: 'none' }}>
        <meta httpEquiv="refresh" content={`0;url=${to}`} />
      </div>
    );
  }

  return null;
}
