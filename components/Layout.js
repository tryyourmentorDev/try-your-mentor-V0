import NavBar from './NavBar';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1 bg-gray-50 p-6">{children}</main>
      <footer className="bg-gray-200 p-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} TryYourMentor</p>
      </footer>
    </div>
  );
}
