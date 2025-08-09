import { useState } from 'react';
import { tabConfig } from '../../utils/constants';

function Tabs() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="headers flex flex-row w-full justify-center border-b ">
        {tabConfig.map((tab) => (
          <div
            className="w-[200px] h-[40px] text-center group relative hover:cursor-pointer"
            onClick={() => setActiveTab(tab.id)}
            key={tab.id}
          >
            {tab.icon} {tab.label}
            <span
              className={`absolute bottom-0 left-0 h-[4px] bg-[pink] transition-all duration-300 ease-out group-hover:w-full ${tab.id === activeTab ? 'w-full' : 'w-0'}`}
            ></span>
          </div>
        ))}
      </div>
      <div className="w-full p-5 flex flex-col min-h-[300px] justify-center items-center">
        {tabConfig.find((tab) => tab.id === activeTab)?.content || null}
        {!activeTab && (
          <div className="flex flex-1 items-center justify-center">
            <h2 className="text-xl font-semibold">Select a tab</h2>
          </div>
        )}
      </div>
    </div>
  );
  return <div className="flex flex-col w-full justify-center items-center "></div>;
}

export default Tabs;
