

export default function InboxCard(props){
    return (
        <div className="flex w-full">
            <div className="w-1 bg-purple" />
            <div className="px-2 bg-[#0c0c0c]" />
            <div className="grow bg-[#0c0c0c] py-4 px-2 pr-3">
                <div className="flex">
                    <img src="https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg"
                        className="flex-none rounded-full w-8 h-8 mr-4" alt="profile pic" />
                    <div className="grow">
                        <h2 className="text-sm font-semibold">Source Code</h2>
                        <h4 className="text-xs font-normal">Here goes the subject</h4>
                    </div>
                    <p className="flex-none text-xs font-light">1:14 pm</p>
                </div>
                <p className="text-xs text-[#aeaeae] mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac libero odio. Aliquam volutpat, felis et convallis consequat, nisl lorem ultricies odio, et imperdiet felis ipsum id massa. Duis justo dolor, venenatis viverra commodo nec, accumsan vel augue. Ut sed libero porta, consectetur justo ac, gravida ex. Morbi quis vestibulum ante, in venenatis ipsum.</p>
            </div>
        </div>
    );
}