import ChatSidebar from "./components/chat-sidebar";
import { MainContent } from "@/app/components/main-content";

export default function App() {
  return (
    <div className="size-full flex bg-neutral-50">
      {/* Main Content Area */}
      <MainContent />
      
      {/* Chat Sidebar */}
      <ChatSidebar />
    </div>
  );
}
