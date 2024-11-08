import { useState, useEffect, useRef } from 'react';
import { CgChevronDown } from "react-icons/cg";
import Panel from './Panel';


function Dropdown({options, value, onChange}) {

    const [isOpen, setIsOpen] = useState(false);
    const divEl = useRef();

    useEffect(() => {
        const handler = (event) => {
            // in the case where element is toggled and not shown automatically then return
            if (!divEl.current) {
                return;
            }
            // console.log(divEl.current);
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handler, true);

        return () => {
            document.removeEventListener('click', handler);
        };
    }, []);



    const handleClick = () => {
        setIsOpen(!isOpen);
    };


    const handleOptionClick = (option) => {
        // console.log('An option value was clicked');
        setIsOpen(false);
        console.log(option);
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return<div className='hover:bg-sky-100 rounded cursor-pointer p-1'
        onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    })

    let content = 'Select...';
    if (value) {
        content = value.label;
    }
    
    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel
                className='flex justify-between items-center cursor-pointer'
                onClick={handleClick}
            >
            {value?.label || 'Select...'}
            <CgChevronDown className='text-3xl' />
        </Panel>
        {isOpen && (
            <Panel className='absolute top-full'>   {renderedOptions}
            </Panel>
        )}
    </div>
)}
    export default Dropdown;