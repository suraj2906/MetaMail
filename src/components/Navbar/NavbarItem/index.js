import Image from "next/image";

export default function NavbarItem(props) {
    return (
        <li className="mr-2 duration-500  border-b-2 border-[#ffffff00] rounded-t-md 
        hover:border-b-2 hover:border-[#ffffff] hover:bg-[#ffffff20]">
            <a href="#" className="inline-flex p-4 rounded-t-lg hover:text-gray-600 hover:text-gray-300">
                {props.image}
                {props.children}
            </a>
        </li>
    )
}