export interface User {
  id: string;
  email: string;
  name: string;
}

export interface MusicPreferences {
  style: string;
  instruments: string[];
  mood: string;
  tempo: string;
  additionalNotes: string;
}

export interface Order {
  id: string;
  userId: string;
  preferences: MusicPreferences;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
  completedAt?: string;
}