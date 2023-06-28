import { FaPaperclip } from "react-icons/fa";

export default function IconButton(props){
    return (
        <button className="dark:hover:bg-[#ffffff20] hover:bg-[#00000020] duration-200 rounded-full">
            <div className='dark:hover:bg-[#ffffff20] hover:bg-[#00000020] flex-row flex bg-[#131313] rounded-full h-[48px] p-[8px]'>
                <div className='rounded-full w-[34px] h-[34px] my-auto flex justify-center flex-col bg-[#000000] text-center items-center'>
                    <FaPaperclip className='text-[20px] my-auto'/>
                </div>
                <div className='ml-[1vw] mr-[0.5vw]'>
                    <p className='text-[11px]'>{props.filename}</p>
                    <p className='text-[10px]'>{props.filesize}</p>
                </div>
            </div>
        </button>
    );
}