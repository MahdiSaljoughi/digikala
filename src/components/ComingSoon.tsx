"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <>
      <Image
        src="/images/logos/typography.svg"
        alt="DigiKala"
        width={1000}
        height={1000}
        className="w-80"
        priority
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      <Link
        target="_blank"
        href={"https://digikala.com/"}
        className="text-4xl font-bold mt-4 text-main-red underline"
      >
        DigiKala
      </Link>
      <p className="text-sm text-gray-600 font-bold">... Coming Soon</p>
    </>
  );
}
