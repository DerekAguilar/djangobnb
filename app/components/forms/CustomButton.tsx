interface CustomButtonProps {
    label:string;
    className?:string;
    onclick:()=>void
}

const CustomButton:React.FC<CustomButtonProps>=({
    label,
    onclick,
    className
})=>{
    return (
        <div 
        className={`w-full py-4 bg-airbnb hover:bg-airbnbDark text-white text-center rounded-xl transition cursor-pointer ${className}`}
        onClick={onclick}
        >
            {label}
        </div>
    )
}

export default CustomButton;