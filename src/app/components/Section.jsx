export default function Section({ id, title, children }) {
  return (
    <section id={id} title={title} className="relative">
      {children}
    </section>
  );
}
