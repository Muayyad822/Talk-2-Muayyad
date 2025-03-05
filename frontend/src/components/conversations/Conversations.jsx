const Conversations = ({ onConversationClick }) => {
const conversations = [
    
];

  return (
    <div className="conversations">
      {conversations.map((conversation) => (
        <div
          key={conversation.id}
          className="conversation-item"
          onClick={onConversationClick}
        >
          {conversation.name}
        </div>
      ))}
    </div>
  );
};

export default Conversations;
