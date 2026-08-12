
export function Footer() {
    return (
      <footer id="contact" className="scroll-mt-8">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="flex flex-col gap-3 py-7 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} William Opio. All rights reserved.
            </p>
            <p>
              Designed &amp; Built with{" "}
              <span aria-label="love" role="img">
                ❤️
              </span>
            </p>
          </div>
        </div>
      </footer>
    );
  }