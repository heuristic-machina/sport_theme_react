import Link from './Link';

function Sidebar() {
    const links = [
        { label: 'Dropdown', path: '/'},
        { label: 'Accordion', path: '/accordion'},
        { label: 'Teams', path: '/table'},
        { label: 'Buttons', path: '/buttons'},
        { label: 'Modal', path: '/modal'},
    ];

    const renderedLinks = links.map((link) => {
        return (
        <Link
        key={link.label} 
        to={link.path} 
        className='mb-3'
        activeClassName='font-bold border-l-4 border-teal-600 pl-2'
        >
        {link.label}
        </Link>
        );
    });

    return (
        <div className='sticky top-0  flex flex-col items-start'>
            {renderedLinks}
        </div>
    )
}

export default Sidebar;