import { useState } from 'react';
import { CgChevronDown, CgChevronLeft  } from "react-icons/cg";

function Accordion({items}) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    const handleClick = (nextIndex) => {
        if (expandedIndex === nextIndex) {
            setExpandedIndex(-1);
        } else {
            setExpandedIndex(nextIndex);
        }
    };

    const renderedItems = items.map((item, index) => {
        const isExpanded = index === expandedIndex;

        const icon = <span className='text-3xl'>
            {isExpanded ? <CgChevronDown /> : <CgChevronLeft />}
        </span>
        
        
        
        return (
            <div key={item.id}>
                <div className='flex justify-between p-3 bg-amber-100 border-b-8 border-slate-500 items-center cursor-pointer 'onClick={() => handleClick(index)}>
                    {item.label}
                    {icon}
                </div>
                {isExpanded && <div className='border-b  p-5'>{item.content}</div>}
            </div>
        );
    });
    return <div className='border-x border-t rounded'>
        {renderedItems}
    </div>;
}

export default Accordion;


// const content = isExpanded && <div>{item.content}</div>

// console.log(isExpanded);
// __________________________________________________________


// if (index === expandedIndex) {
    //     console.log('expanded');
    // } else {
        //     console.log('collapsed');
        // }

