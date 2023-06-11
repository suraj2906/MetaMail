

export default function IconButton(props){
    return (
        <button className="bg-transparent py-3 px-4 rounded-lg text-xs flex dark:hover:bg-[#ffffff20] hover:bg-[#00000020] duration-200">
            {props.children}
        </button>
    );
}