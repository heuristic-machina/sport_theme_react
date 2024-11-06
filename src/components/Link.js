import classNames from "classnames";
import useNavigation from '../hooks/use-navigation';

function Link({ to, children, className, activeClassName }) {
    const { navigate, currentPath } = useNavigation();

    const classes = classNames(
        'text-teal-500',
         className,
        currentPath === to && activeClassName);

    const handleClick = (event) => {

        // Implement key combo: cntrl + click to open link in new window
        // console.log(event);
        if(event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
        // console.log('User navigating to:', to);
    };
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link;