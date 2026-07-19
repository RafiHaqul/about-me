export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 border-t border-line">
      <div className="max-w-6xl mx-auto text-center">
        {/* <p className="terminal-eyebrow mb-3 justify-center inline-flex">curl contact --send</p> */}
        <h2 className="font-display font-bold text-3xl mb-4">Mari Berdiskusi</h2>
        <p className="text-muted max-w-xl mx-auto mb-8">
          Terbuka untuk bekerjasama ataupun berdiskusi.
        </p>
        <div className="flex flex-wrap justify-center gap-4 font-mono text-sm">
          <a
            href="mailto:rafihaqulb010@email.com"
            className="bg-ink text-paper px-6 py-3 rounded-md hover:bg-accent transition-colors"
          >
            rafihaqulb010@email.com
          </a>
          <a
            href="https://github.com/rafihaqul"
            target="_blank"
            rel="noreferrer"
            className="border border-line px-6 py-3 rounded-md hover:border-accent hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/rafihaqul"
            target="_blank"
            rel="noreferrer"
            className="border border-line px-6 py-3 rounded-md hover:border-accent hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
