export default function Footer() {
  return (
    <footer className="px-6 sm:px-10 lg:px-16 py-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="h-px bg-rule mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Joshua Powder
          </p>
          <p className="text-xs text-muted">
            Built with Next.js &amp; Tailwind
          </p>
        </div>
      </div>
    </footer>
  )
}
