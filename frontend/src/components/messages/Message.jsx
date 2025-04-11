import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
	const { authUser } = useAuthContext();
	const { selectedConversation } = useConversation();
	const fromMe = message.senderId === authUser._id;
	const formattedTime = extractTime(message.createdAt);
	const chatClassName = fromMe ? "chat-end" : "chat-start";
	const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
	const bubbleBgColor = fromMe ? "bg-blue-600" : "bg-gray-700";
	const shakeClass = message.shouldShake ? "shake" : "";

	return (
		<div className={`chat ${chatClassName} mb-4`}>
			<div className='chat-image avatar'>
				<div className='w-8 h-8 rounded-full overflow-hidden'>
					<img 
						alt='User avatar' 
						src={profilePic} 
						className='w-full h-full object-cover'
					/>
				</div>
			</div>
			<div className={`chat-bubble ${bubbleBgColor} ${shakeClass} text-white`}>
				{message.message}
			</div>
			<div className='chat-footer opacity-50 text-xs'>
				{formattedTime}
			</div>
		</div>
	);
};
export default Message;
