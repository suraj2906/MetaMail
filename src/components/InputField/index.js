

export default function InputField(props){
    return (
        <div className="flex w-full py-3 bg-[#0c0c0c] rounded-md">
            <div className="ml-4 mr-4">
            {props.foreImage}
            </div>
            <input type="text" placeholder="Search" className="w-full h-full bg-t"/>
        </div>
    );
}