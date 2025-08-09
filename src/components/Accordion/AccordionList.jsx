import { useState } from 'react';
import { accordionList } from '../../utils/constants';
import Accordion from './Accordion';
import { Input } from 'postcss';

function AccordionList() {
  const [list, setList] = useState(accordionList);
  const [collapseOthers, setCollapseOthers] = useState(false);

  const handleToggle = (itemIdx) => {
    setList((prev) =>
      prev.map((item, idx) =>
        idx === itemIdx
          ? { ...item, expanded: !item.expanded }
          : collapseOthers
            ? { ...item, expanded: false }
            : item
      )
    );
  };

  const handleChangeCollapseOthers = (event) => {
    setCollapseOthers(event?.target?.checked);
  };

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-3">Controls</h2>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            id="collapseOthers"
            checked={collapseOthers}
            onChange={handleChangeCollapseOthers}
            className="w-4 h-4 accent-blue-500"
          />
          <label htmlFor="collapseOthers" className="text-gray-700 cursor-pointer">
            Collapse others
          </label>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4 pb-2 w-full max-w-md">FAQs</h2>
      <div className="w-full max-w-md">
        {list.map((item, idx) => (
          <Accordion
            key={idx}
            item={item}
            toggle={handleToggle}
            index={idx}
            lastIndex={idx === list.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default AccordionList;
