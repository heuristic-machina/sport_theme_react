// import PropTypes from 'prop-types';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    rounded,
    ...rest
}) {
    // console.log(rest);
    
    let classes = classNames('flex items-center px-3 py-1.5 border', {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-900 bg-blue-900 text-white': secondary,
        'border-green-500 bg-green-500 text-white': success,
        'border-yellow-500 bg-yellow-400 text-white': warning,
        'border-orange-800 bg-orange-500 text-white': danger,
        'rounded-full': rounded,
    });
    
    classes = twMerge(classes);
    
    return <button {...rest} className={classes}>
        {children}
        </button>;
}

Button.propTypes = {
    checkVariationValue: (
        {primary,
            secondary,
            success,
            danger,
            warning,
        }) => {
            // console.log(props);
            const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!danger)
            + Number(!!warning);
            
            
            // if (count > 1) {
            //     console.log('Greater than one');
            //     // return new Error('Only one of primary, secondary, success, danger, warning, can be true');
            // }
        },
    };
    
    export default Button;

