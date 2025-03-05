import { useState } from "react";
import MessageContainer from "../../components/messages/MessageContainer";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-screen bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Sidebar (Hidden when a message is open on mobile) */}
      <div className={`${isMessageOpen ? "hidden sm:block" : "block"}`}>
        <Sidebar setIsMessageOpen={setIsMessageOpen} />
      </div>

      {/* Message Container (Hidden on small screens until clicked) */}
      <div className={`msgContainer w-full sm:min-w-[450px] ${isMessageOpen ? "block" : "hidden sm:block"}`}>
        <MessageContainer setIsMessageOpen={setIsMessageOpen} />
      </div>
    </div>
  );
};

export default Home;
