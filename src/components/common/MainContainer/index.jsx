export function MainContainer({ children }) {
  return (
    <section
      className={`
        container mx-auto flex
        flex-col items-center justify-center
        p-6 md:p-12
      `}
    >
      {children}
    </section>
  );
}
