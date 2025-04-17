import Sidebar from '@/components/dashboard/Sidebar'
import ChatInterface from '@/components/dashboard/ChatInterface'

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-muted/30">
  
      <Sidebar />

      <main className="flex-1 flex flex-col overflow-hidden">
        <ChatInterface />
      </main>
    </div>
  )
}
