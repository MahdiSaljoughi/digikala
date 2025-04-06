import Link from "next/link";

export default function MainBottomMenu() {
  return (
    <div className="lg:hidden flex justify-between items-center bg-white text-zinc-400/80 fixed bottom-0 w-full px-10 py-4 sm:px-20 shadow-black shadow-md text-[10px] sm:text-xs z-10">
      <div>
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[26px]"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M13.45 2.533a2.25 2.25 0 0 0-2.9 0L3.8 8.228a2.25 2.25 0 0 0-.8 1.72v9.305c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V15.25c0-.68.542-1.232 1.217-1.25h2.566a1.25 1.25 0 0 1 1.217 1.25v4.003c0 .966.784 1.75 1.75 1.75h3a1.75 1.75 0 0 0 1.75-1.75V9.947a2.25 2.25 0 0 0-.8-1.72z"
            />
          </svg>
          <span className="text-zinc-500">صفحه اصلی</span>
        </Link>
      </div>
      <div>
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[20px] sm:w-[26px]"
          >
            <path
              fill="currentColor"
              d="M14.116 20q-.667 0-1.141-.475t-.475-1.14v-4.27q0-.666.475-1.14t1.14-.475h4.27q.666 0 1.14.475t.475 1.14v4.27q0 .666-.475 1.14t-1.14.475zm0-8.5q-.667 0-1.141-.475t-.475-1.14v-4.27q0-.666.475-1.14T14.115 4h4.27q.666 0 1.14.475T20 5.615v4.27q0 .666-.475 1.14t-1.14.475zm-8.5 0q-.667 0-1.141-.475T4 9.885v-4.27q0-.666.475-1.14T5.615 4h4.27q.666 0 1.14.475t.475 1.14v4.27q0 .666-.475 1.14t-1.14.475zm0 8.5q-.667 0-1.141-.475T4 18.386v-4.27q0-.666.475-1.14t1.14-.475h4.27q.666 0 1.14.475t.475 1.14v4.27q0 .666-.475 1.14T9.885 20z"
            />
          </svg>
          <span className="text-zinc-500">دسته بندی ها</span>
        </Link>
      </div>
      <div>
        <Link
          href="/cart"
          className="flex flex-col items-center justify-center gap-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[26px]"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M18.06 3a2 2 0 0 1 1.98 1.719l.017.156l.875 14a2 2 0 0 1-1.847 2.12l-.15.005H5.066a2 2 0 0 1-2-1.976l.003-.149l.875-14a2 2 0 0 1 1.84-1.869L5.94 3zM15 7a1 1 0 0 0-.993.883L14 8a2 2 0 1 1-4 0a1 1 0 0 0-2 0a4 4 0 0 0 8 0a1 1 0 0 0-1-1"
              />
            </g>
          </svg>
          <span className="text-zinc-500">سبد خرید</span>
        </Link>
      </div>
      <div>
        <Link
          href={"/auth"}
          className="flex flex-col items-center justify-center gap-y-1"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] sm:w-[26px]"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="6" r="4" fill="currentColor" />
            <path
              fill="currentColor"
              d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5"
            />
          </svg>
          <span className="text-zinc-500">ورود</span>
        </Link>
      </div>
    </div>
  );
}
