import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'

const style = {
  color: '#0070f3',
  TextDecoration: 'underline'
}

export const ActiveLink = ({text, href}) => {

    const {asPath } = useRouter();

  return (
    <Link legacyBehavior href={ href }>
        <a style = { asPath === href ? style : null }>{ text }</a>
    </Link>
  );
};
