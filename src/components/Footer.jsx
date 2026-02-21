export default function Footer() {
  return (
    <div className="h-full bg-black border-t border-white/10 flex items-center justify-center text-center px-6">
      <div>
        <h2 className="text-white text-xl mb-4">JANUS</h2>
        <p className="text-textSecondary">
          © {new Date().getFullYear()} Janus Packaging. All rights reserved.
        </p>
      </div>
    </div>
  );
}