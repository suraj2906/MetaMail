export default function Chip(props){
    const color = {
        "danger": "danger",
        "success": "green",
        "danger": "yellow",
        "info": "blue"
    }
    return (
        <div className={'bg-danger px-2 rounded-full max-h-4 text-xs text-center self-center'}>
            {props.children}
        </div>
    )
}