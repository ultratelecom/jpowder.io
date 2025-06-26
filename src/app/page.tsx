import CyberpunkProfile from '@/components/CyberpunkProfile'
import CyberpunkNavigation from '@/components/CyberpunkNavigation'

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden relative">
      {/* Full Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/JOSH_PIC.jpg)',
        }}
      />
      
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Clean gradient overlays for depth and style */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/20 via-transparent to-blue-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-black/20 to-transparent" />
      
      {/* Main Content - Full Width */}
      <div className="relative z-10 min-h-screen flex items-center">
        <CyberpunkProfile />
      </div>

      {/* Responsive Navigation */}
      <CyberpunkNavigation />

      {/* Cyberpunk scan lines effect */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-5">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent bg-[length:100%_4px] animate-pulse" />
      </div>
    </main>
  )
} 