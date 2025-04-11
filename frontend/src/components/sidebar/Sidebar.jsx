import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";

const Sidebar = ({ setIsMessageOpen }) => {
  return (
    <div className='flex flex-col h-full p-4'>
      <div className='flex items-center justify-between mb-4'>
        <h1 className='text-xl font-bold text-gray-300'>Chats</h1>
      </div>
      
      <div className='mb-4'>
        <SearchInput />
      </div>

      <div className='flex-1 overflow-y-auto'>
        <Conversations setIsMessageOpen={setIsMessageOpen} />
      </div>

      <div className='mt-auto pt-4 border-t border-gray-700'>
        <LogoutButton />
      </div>
    </div>
  );
};

export default Sidebar;

// STARTER CODE FOR THIS FILE
// import Conversations from "./Conversations";
// import LogoutButton from "./LogoutButton";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
// 	return (
// 		<div className='border-r border-slate-500 p-4 flex flex-col'>
// 			<SearchInput />
// 			<div className='divider px-3'></div>
// 			<Conversations />
// 			<LogoutButton />
// 		</div>
// 	);
// };
// export default Sidebar;
