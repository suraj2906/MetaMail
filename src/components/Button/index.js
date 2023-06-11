

export default function Button(props) {
    return (
        <button className="bg-purple py-3 px-4 rounded-full text-xs flex">
            <div className="px-1">
                {props.foreImage}
            </div>
            {props.children}
            <div className="px-1">
                {props.backImage}
            </div>
        </button>
    );
}