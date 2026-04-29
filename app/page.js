export default function Home() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'system-ui, sans-serif',
        background: 'linear-gradient(180deg, #cdeefd 0%, #4aa3df 100%)',
        color: '#0b3954',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '6rem', lineHeight: 1 }} aria-hidden="true">
        🐬
      </div>
      <h1 style={{ fontSize: '3rem', margin: '1rem 0 0.5rem' }}>
        Hello, Dolphins!
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '36rem' }}>
        Dolphins are highly intelligent marine mammals known for their playful
        behavior, complex communication, and friendly nature.
      </p>
    </main>
  );
}
