import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import type { VitalSignRecord } from '../../types/index';
interface VitalsChartProps {
  data: VitalSignRecord[];
}

export const VitalsChart: React.FC<VitalsChartProps> = ({ data }) => {
  return (
    <div style={{ height: '350px', width: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="time" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip contentStyle={{ backgroundColor: '#222', border: 'none', color: '#fff' }} />
          <Legend />
          <Line type="monotone" dataKey="heartRate" stroke="#ff7300" strokeWidth={3} name="Heart Rate (bpm)" />
          <Line type="monotone" dataKey="oxygen" stroke="#387908" strokeWidth={3} name="Oxygen (%)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};