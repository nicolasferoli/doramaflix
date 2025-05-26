import React from 'react';
import { Tv, Smartphone, Monitor, Box } from 'lucide-react';

interface DeviceProps {
  name: string;
  icon: React.ReactNode;
}

const Device: React.FC<DeviceProps> = ({ name, icon }) => {
  return (
    <div className="flex flex-col items-center gap-3 transform transition-transform hover:scale-110">
      <div className="bg-[#E50914]/10 p-4 rounded-full">
        {icon}
      </div>
      <span className="font-medium">{name}</span>
    </div>
  );
};

export const DeviceCompatibility: React.FC = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
          📱 <span className="text-[#E50914]">COMPATÍVEL COM TODOS OS SEUS DISPOSITIVOS</span>
        </h2>
        
        <div className="flex flex-wrap justify-center gap-10 mb-10">
          <Device name="Smart TV" icon={<Tv size={40} className="text-[#E50914]" />} />
          <Device name="Celular/Tablet" icon={<Smartphone size={40} className="text-[#E50914]" />} />
          <Device name="Computador" icon={<Monitor size={40} className="text-[#E50914]" />} />
          <Device name="TV Box" icon={<Box size={40} className="text-[#E50914]" />} />
        </div>
        
        <div className="mt-10 bg-[#141414] rounded-lg p-6 max-w-3xl mx-auto">
          <h3 className="text-xl font-bold mb-4 text-center">Lista de Compatibilidade</h3>
          <div className="flex flex-wrap justify-center gap-4 text-lg">
            <span className="flex items-center">✔️ Smart TV</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center">✔️ Android/iOS</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center">✔️ Computador</span>
            <span className="hidden sm:inline">|</span>
            <span className="flex items-center">✔️ TV Box</span>
          </div>
          <p className="text-center mt-4 text-gray-400">
            Nosso aplicativo funciona em qualquer dispositivo com acesso à internet
          </p>
        </div>
      </div>
    </section>
  );
};