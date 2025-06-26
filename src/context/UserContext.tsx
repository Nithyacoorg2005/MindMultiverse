import React, { createContext, useContext, useState, ReactNode } from 'react';

interface UserData {
  level: number;
  experiencePoints: number;
  streak: number;
  achievements: string[];
  dreamsAnalyzed: number;
  realitiesExplored: number;
}

interface UserContextType {
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
  addExperience: (points: number) => void;
}

const defaultUserData: UserData = {
  level: 1,
  experiencePoints: 0,
  streak: 0,
  achievements: [],
  dreamsAnalyzed: 0,
  realitiesExplored: 0,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>(defaultUserData);

  const updateUserData = (data: Partial<UserData>) => {
    setUserData(prev => ({ ...prev, ...data }));
  };

  const addExperience = (points: number) => {
    setUserData(prev => {
      const newXP = prev.experiencePoints + points;
      const newLevel = Math.floor(newXP / 500) + 1;
      return {
        ...prev,
        experiencePoints: newXP,
        level: newLevel,
      };
    });
  };

  return (
    <UserContext.Provider value={{ userData, updateUserData, addExperience }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};