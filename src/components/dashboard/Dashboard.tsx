import React, { useState, useEffect } from 'react';
import { VitalsChart } from '../charts/VitalsChart';

// --- Local Type Definition (Eliminates import path errors) ---
export interface VitalSignRecord {
  time: string;
  heartRate: number;
  oxygen: number;
  stressLevel: number;
}

export const Dashboard: React.FC = () => {
  const [vitals, setVitals] = useState<VitalSignRecord[]>([]);
  const [systemAlert, setSystemAlert] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const timeNow = new Date().toLocaleTimeString();
      const stressLevel = Math.random();
      
      const newRecord: VitalSignRecord = {
        time: timeNow,
        heartRate: Math.floor(Math.random() * (110 - 70 + 1) + 70),
        oxygen: Math.floor(Math.random() * (100 - 95 + 1) + 95),
        stressLevel: stressLevel
      };

      if (stressLevel > 0.8) {
        setSystemAlert("AI Alert: Elevated stress patterns detected in telemetry.");
      } else {
        setSystemAlert(null);
      }

      setVitals(prev => [...prev.slice(-9), newRecord]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: '20px', color: 'white' }}>
      <header style={{ borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>
        <h1 style={{ margin: 0 }}>Mission Control: Health Dashboard</h1>
        <p style={{ color: '#888', margin: '5px 0 0 0' }}>Real-time Astronaut Monitoring System</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '20px' }}>
        <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ marginTop: 0 }}>Live Vitals Monitor</h2>
          
          {systemAlert && (
            <div style={{ backgroundColor: '#ff4d4f', color: 'white', padding: '10px', borderRadius: '5px', marginBottom: '15px', fontWeight: 'bold' }}>
              {systemAlert}
            </div>
          )}

          <VitalsChart data={vitals} />
        </div>

        <div style={{ backgroundColor: '#161b22', padding: '20px', borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
          <h2 style={{ marginTop: 0 }}>AI Companion Terminal</h2>
          <div style={{ border: '1px solid #333', flexGrow: 1, borderRadius: '5px', padding: '10px', overflowY: 'auto', backgroundColor: '#0d1117', marginBottom: '10px', minHeight: '200px' }}>
            <p style={{ color: '#888', fontSize: '0.9em', margin: '5px 0' }}>System: AI Companion interface established.</p>
            {systemAlert && (
              <p style={{ color: '#58a6ff', margin: '5px 0' }}>
                <strong>AI:</strong> I have detected a spike in your stress levels based on the latest telemetry. Do you require operational assistance?
              </p>
            )}
          </div>
          <input 
            type="text" 
            placeholder="Input command or message..." 
            style={{ width: '100%', boxSizing: 'border-box', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#0d1117', color: 'white' }}
          />
        </div>
      </div>
    </div>
  );
};