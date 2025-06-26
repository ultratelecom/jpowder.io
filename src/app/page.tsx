import MatrixRain from '@/components/MatrixRain'
import CyberpunkProfile from '@/components/CyberpunkProfile'
import CyberpunkNavigation from '@/components/CyberpunkNavigation'

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden relative">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10 z-5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-transparent z-5" />
      
      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 h-screen">
        {/* Left Section - Profile */}
        <div className="lg:col-span-2 flex items-center">
          <CyberpunkProfile />
        </div>
        
        {/* Right Section - Navigation */}
        <div className="hidden lg:block relative">
          <CyberpunkNavigation />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-4">
          <button className="px-4 py-2 bg-gray-900/90 border border-cyan-400/50 text-cyan-400 font-mono text-sm backdrop-blur-sm hover:border-cyan-400 transition-all">
            AI TOOLS
          </button>
          <button className="px-4 py-2 bg-gray-900/90 border border-cyan-400/50 text-cyan-400 font-mono text-sm backdrop-blur-sm hover:border-cyan-400 transition-all">
            CONTACT
          </button>
        </div>
      </div>

      {/* Cyberpunk scan lines effect */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent bg-[length:100%_4px] animate-pulse" />
      </div>
    </main>
  )
} 