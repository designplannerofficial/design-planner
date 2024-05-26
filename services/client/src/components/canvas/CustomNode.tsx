import { Handle, Position } from 'reactflow';
import { FaPlusCircle } from "react-icons/fa";
import { useState } from 'react';

const CustomNode = ({ data }: {
  data: Record<string, any>
}) => {
  const [formElements, setFormElements] = useState([0]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    data.onChange(event.target.name, event.target.value);
  };

  const addFormElement = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setFormElements((state) => [...state, state.length]);
  };

  return (
    <div className='border border-primary rounded p-4'>
      <Handle type="target" position={Position.Top} id="node-0-target" className='w-10 h-2 rounded' />
      <form className='flex flex-col items-start gap-2'>
        {formElements.map((item, index) => (
          <div key={index} className='flex items-center justify-between gap-2'>
            <button onClick={addFormElement} className='opacity-50 hover:opacity-70'>
              <FaPlusCircle />
            </button>
            <input
              type="text"
              id={`input-${item}`}
              name={`input-${item}`}
              value={data[`input-${item}`]}
              onChange={handleChange}
              className='w-48 h-6 bg-secondary outline-none px-4 py-4 text-xs'
            />
            <select
              name={`type-${item}`}
              id={`type-${item}`}
              className='outline-none cursor-pointer bg-secondary px-2 py-[0.4rem] text-xs'
            >
              <option value="string">string</option>
              <option value="number">number</option>
              <option value="boolean">boolean</option>
              <option value="object-id">object-id</option>
            </select>
            <div className='flex items-center justify-center gap-1'>
              <button className='opacity-100 w-8 h-8 rounded bg-secondary'>
                <span className='font-bold text-primary'>R</span>
              </button>
              <button className='opacity-50 hover:opacity-70 w-8 h-8 rounded bg-secondary'>
                <span className='font-bold text-primary'>I</span>
              </button>
              <button className='opacity-50 hover:opacity-70 w-8 h-8 rounded bg-secondary'>
                <span className='font-bold text-primary'>U</span>
              </button>
            </div>
            <Handle
              type={"source"}
              position={Position.Right}
              id={`input-${item}-source`}
              style={{ top: `${index * 40 + 30}px` }} 
              className='w-2 h-4 rounded-sm bg-primary opacity-50'
            />
          </div>
        ))}
      </form>
    </div>
  );
};

export default CustomNode;
