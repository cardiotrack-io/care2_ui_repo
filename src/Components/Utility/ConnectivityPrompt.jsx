import React, { useState, useEffect } from 'react';

const ConnectivityPrompt = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    !isOnline && (
      <div className="connectivity-prompt">
        <p>You are currently offline. Some features may not be available.</p>
      </div>
    )
  );
};

export default ConnectivityPrompt;
