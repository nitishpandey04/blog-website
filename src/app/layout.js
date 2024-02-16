import Link from "next/link";
import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Blog Website",
  description: "Create, read, edit and delete blogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col space-y-4">
          <Header />
          <div className="flex justify-start min-h-screen">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <>
      <nav className="flex flex-row justify-between shadow-lg items-center p-4 px-6">
        <Link href="/">
          <div className="flex flex-row sm:space-x-2">
            <Image className="hidden sm:block" src="/logo.svg" alt="logo" height={30} width={30}/>
            <p className="font-semibold text-center">Personal<br />Blogger</p>
          </div>
        </Link>
        <div className="bg-blue-500 p-2 rounded-md text-white">
          <Link href="/create">
            <button>Create</button>
          </Link>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <footer className="flex flex-row justify-between p-6 border-t-2 items-center">
      <div className="flex flex-row sm:space-x-2">
        <Link href="/">
          <Image className="hidden sm:block" src="/logo.svg" alt="logo" height={25} width={25} />
        </Link>
        <p className="text-sm">Made with ❤️ in Bharat</p>
      </div>
      <div className="flex flex-row space-x-2">
        <Link href="https://www.linkedin.com/in/nitishpandey2117">
          <Image src="/linkedin.svg" alt="" height={20} width={20}/>
        </Link>
        <Link href="https://github.com/nitishpandey04">
          <Image src="/github.svg" alt="" height={20} width={20}/>
        </Link>
      </div>
    </footer>
  );
}