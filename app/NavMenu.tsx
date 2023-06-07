import { SignInButton, SignOutButton } from '@/components/buttons';
import Image from 'next/image';
import Link from 'next/link';

type NavMenuProps = {};

async function NavMenu({}: NavMenuProps) {
  return (
    <nav className=" bg-orange-600 py-2">
      <div className="m-4 flex justify-between sm:mx-8 md:mx-16 lg:mx-32">
        <Link href="/">
          <Image src="/logo.svg" alt="AV Hub Logo" width={216} height={30} />
        </Link>
        <ul className="hidden max-w-sm items-center justify-between sm:flex sm:w-1/2">
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
          <li>
            <Link href={'/users'}>Users</Link>
          </li>
          <li>
            <SignInButton />
          </li>
          <li>
            <SignOutButton />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavMenu as unknown as () => JSX.Element;
// ^ to avoid TS error when importing async components.
