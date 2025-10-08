export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 text-center py-4 text-sm border-t border-gray-200 dark:border-gray-700">
      <p>
        © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-white">Juan Manuel Ordoñez</span> ·
        <a href="https://www.linkedin.com/in/juan-manuel-ordo%C3%B1ez-armero-781577337/" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400 ml-1">Linkedin</a>
      </p>
    </footer>
  );
}