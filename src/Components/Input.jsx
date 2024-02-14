/* eslint-disable react/prop-types */

const Input = ({
    onFocus, 
    name, 
    onBlur, 
    onIconAfterClicked, 
    maxLength,
    type, 
    ContainerStyles, 
    placeholder, 
    value , 
    onChange, 
    required, 
    InputStyles, 
    IconBefore, 
    IconStyleBefore, 
    IconStyleAfter, 
    IconAfter,
    disabled
}) => {
    return (
        <div className={`${ContainerStyles} flex items-center border-[1.5px] border-[#85b1ff] rounded h-8`}>
            {IconBefore && <IconBefore className={`m-4 text-[#000000] hover:cursor-pointer ${IconStyleBefore}`}/>}
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                type={type}
                maxLength={maxLength}
                onFocus={onFocus}
                name={name}
                onBlur={onBlur}
                disabled={disabled}
                className={`${InputStyles} w-[100%] h-[100%] rounded focus:outline-none text-sm`}
            />
            {IconAfter && <IconAfter onClick={onIconAfterClicked} className={`m-4 hover:cursor-pointer ${IconStyleAfter}`}/>}
        </div>
    )
}


export default Input;