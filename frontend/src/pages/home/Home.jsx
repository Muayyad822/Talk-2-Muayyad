import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className='flex w-full'>
      {/* Sidebar */}
      <div className={`${isMessageOpen ? 'hidden md:block' : 'w-full md:w-[350px]'} bg-gray-800 border-r border-gray-700`}>
        <Sidebar setIsMessageOpen={setIsMessageOpen} />
      </div>

      {/* Message Container */}
      <div className={`${isMessageOpen ? 'w-full' : 'hidden md:block'} flex-1 bg-gray-900`}>
        <MessageContainer setIsMessageOpen={setIsMessageOpen} />
      </div>
    </div>
  );
};

export default Home;
