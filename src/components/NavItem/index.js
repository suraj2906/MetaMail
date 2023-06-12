import Chip from "../InfoChip";


export default function NavItem(props) {
    return (
        <div className="flex w-full bg-[#0c0c0c] pr-7 mb-8">
            <div className="py-2 w-1 bg-purple mr-8" />
            <div className="mt-1">
                 
            {props.foreImage}
            </div>
            <h5 className="align-text-bottom grow ml-3 text-purple mt-1 text-sm mr-5">{props.children}</h5>
            <Chip color="danger">6</Chip>
        </div>
    );
}