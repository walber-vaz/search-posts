export default function Footer() {
  return (
    <footer className="mt-4 text-center text-gray-800">
      <p>
        Feito por{' '}
        <a
          className="
            text-blue-500
            transition
            duration-500
            hover:text-blue-700
            hover:underline
          "
          href="https://github.com/walber-vaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Walber Vaz
        </a>
        <span> &copy; {new Date().getFullYear().toString()}</span>
      </p>
    </footer>
  );
}
