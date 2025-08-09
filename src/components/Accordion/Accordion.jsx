import { MinusSquare, PlusSquare } from 'react-feather';

function Accordion({ item, toggle, index, lastIndex }) {
  const { title, content, expanded } = item;
  return (
    <div
      className={`relative flex flex-col w-full hover:cursor-pointer border-b border-[#ddd] last:border-b-0`}
      onClick={() => toggle(index)}
    >
      <div className="flex flex-row gap-2 bg-gray-200 p-2 w-full">
        <span>{expanded ? <MinusSquare /> : <PlusSquare />}</span>
        <span>{title}</span>
      </div>

      <div
        className={` overflow-hidden transition-[max-height padding] duration-400 ease-in-out px-2 ${
          expanded ? 'max-h-96 p-4' : 'max-h-0'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default Accordion;
