import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

export default function ProgressBar() {
    const [progress, setProgress] = useState(100);
    const duration = 3000; // Countdown duration in milliseconds
  
    useEffect(() => {
      const interval = 50; // Adjust the interval for smoother progress
      const steps = duration / interval;
  
      const updateProgress = (currentStep) => {
        const newProgress = (1 - currentStep / steps) * 100;
        setProgress(newProgress);
      };
  
      for (let i = 0; i < steps; i++) {
        setTimeout(() => {
          updateProgress(i + 1);
  
          if (i + 1 === steps) {
            setProgress(0);
          }
        }, i * interval);
      }
    }, [duration]);

  return (
    <Box sx={{ width: '14rem' }}>
      <LinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
