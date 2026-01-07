export default function AnimatedBackground() {
  return (
    <div className="lines">
      {Array.from({ length: 10 }).map((_, i) => (
        <div className="line" key={i} />
      ))}
    </div>
  );
}
