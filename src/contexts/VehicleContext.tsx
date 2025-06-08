
import React, { createContext, useContext, useState, ReactNode } from 'react';

type VehicleType = 'car' | 'bike';

interface VehicleContextType {
  vehicleType: VehicleType;
  setVehicleType: (type: VehicleType) => void;
}

const VehicleContext = createContext<VehicleContextType | undefined>(undefined);

export const useVehicle = () => {
  const context = useContext(VehicleContext);
  if (!context) {
    throw new Error('useVehicle must be used within a VehicleProvider');
  }
  return context;
};

interface VehicleProviderProps {
  children: ReactNode;
}

export const VehicleProvider: React.FC<VehicleProviderProps> = ({ children }) => {
  const [vehicleType, setVehicleType] = useState<VehicleType>('car');

  return (
    <VehicleContext.Provider value={{ vehicleType, setVehicleType }}>
      {children}
    </VehicleContext.Provider>
  );
};
