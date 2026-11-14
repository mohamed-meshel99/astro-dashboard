export interface VitalSignRecord {
  time: string;
  heartRate: number;
  oxygen: number;
  stressLevel: number;
}

export interface AIResponse {
  id: string;
  sender: 'system' | 'ai' | 'user';
  message: string;
  timestamp: string;
}

export interface Astronaut {
  id: string;
  name: string;
  missionId: string;
  status: 'Stable' | 'Warning' | 'Critical';
}