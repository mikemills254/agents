import React from 'react';

const Button = ({
        IconAfterStyle,
        disabled,
        IconBefore,
        IconAfter,
        type,
        text,
        ContainerStyle,
        IconBeforeStyle,
        onClick,
        textStyles,
        renderChildren,
    }) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`${ContainerStyle} container flex items-center justify-center h-[2.5rem] rounded`}
        >
            <div
                role='button'
                type={type}
                className='bg-slatw-900 w-full h-full flex items-center justify-center gap-2'
                onClick={onClick}
            >
                {IconBefore && <IconBefore className={`${IconBeforeStyle}`} />}
                <p className={`${textStyles}`}>{text}</p>
                {renderChildren}
                {IconAfter && <IconAfter className={`${IconAfterStyle}`} />}
            </div>
        </button>
    );
};

export default Button;
