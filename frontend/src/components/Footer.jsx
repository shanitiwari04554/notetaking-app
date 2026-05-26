function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/40 backdrop-blur-xl mt-10">

      <div className="max-w-7xl mx-auto px-4 py-5 text-center">

        <p className="text-gray-400 text-sm sm:text-base">
          © {new Date().getFullYear()}{" "}
          <span className="font-bold text-white">
            NoteKeeper
          </span>{" "}
          — Crafted with modern UI
        </p>

      </div>
    </footer>
  );
}

export default Footer;