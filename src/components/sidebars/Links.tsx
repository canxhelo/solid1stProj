import { AiOutlineHome } from "solid-icons/ai";
import { CgMoreO, CgProfile } from "solid-icons/cg";
import { IoNotificationsCircleOutline } from "solid-icons/io";
import { RiMapCompassDiscoverLine } from "solid-icons/ri";
const SIZE=24

export const links =[{
    name: "Home",
    href:"/",
    icon: ()=><AiOutlineHome size={SIZE} />
},
{
    name: "Profile",
    href:"/profile",
    icon: ()=><CgProfile size={SIZE} />
},
{
    name: "More",
    href:"/more",
    icon: ()=><CgMoreO size={SIZE} />
},
{
    name: "Notifications",//Notification
    href:"/auth/login",
    icon: ()=><IoNotificationsCircleOutline size={SIZE} />
},
{
    name: "Discover",//Discover
    href:"/auth/register",
    icon: ()=><RiMapCompassDiscoverLine size={SIZE} />
}]