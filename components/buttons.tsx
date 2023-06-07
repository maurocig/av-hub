'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

export function SignInButton() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <>...</>;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <Image
          alt="Your Name"
          src={session.user?.image ?? '/img/default-profile.png'}
          width={32}
          height={32}
        />
      </div>
    );
  }

  return <button onClick={() => signIn()}>Sign in</button>;
}

export function SignOutButton() {
  const { data: session, status } = useSession();

  if (status === 'authenticated') {
    return <button onClick={() => signOut()}>Sign out</button>;
  }

  return <></>;
}
