"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="container w-full flex justify-between flex-col md:flex-row py-3 gap-3">
        <div className="flex gap-5 flex-col sm:flex-row items-center">
          <Link href="#" className="hover:underline">
            Terms of Service
          </Link>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
        </div>
        <ul className="flex gap-3 justify-center sm:justify-start">
          <li>
            <a
              className="block h-8 w-8 fill-black hover:fill-shade-70"
              href="https://www.facebook.com/shopify"
              target="_blank"
            >
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
          </li>
          <li>
            <a
              className="block h-8 w-8 fill-black hover:fill-shade-70"
              href="https://twitter.com/shopify"
              target="_blank"
            >
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>

              <span className="sr-only">Twitter</span>
            </a>
          </li>
          <li>
            <a
              className="block h-8 w-8 fill-black hover:fill-shade-70"
              href="https://www.youtube.com/user/shopify"
              target="_blank"
            >
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path d="M30 15c0 8.3-6.7 15-15 15S0 23.3 0 15 6.7 0 15 0s15 6.7 15 15zm-5.6 0c0-6.9 0-6.9-9.4-6.9s-9.4 0-9.4 6.9 0 6.9 9.4 6.9 9.4 0 9.4-6.9zm-11.9-3.7 6.3 3.8-6.3 3.8v-7.6z"></path>
              </svg>
              <span className="sr-only">YouTube</span>
            </a>
          </li>
          <li>
            <a
              className="block h-8 w-8 fill-black hover:fill-shade-70"
              href="https://www.instagram.com/shopify/"
              target="_blank"
            >
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
              >
                <path
                  clipRule="evenodd"
                  d="M9 0c5 0 9 4 9 9s-4 9-9 9-9-4-9-9 4-9 9-9zM6.7 3.5h4.7c1.8 0 3.2 1.4 3.2 3.1v4.7c0 1.7-1.4 3.1-3.2 3.1H6.7c-1.8 0-3.2-1.4-3.2-3.1V6.7c0-1.8 1.4-3.2 3.2-3.2zM9 6.2c1.6 0 2.9 1.3 2.9 2.9S10.6 12 9 12s-3-1.3-3-2.9 1.3-2.9 3-2.9zm0 1.2c.9 0 1.7.8 1.7 1.7 0 .9-.8 1.7-1.7 1.7-.9 0-1.7-.8-1.7-1.7 0-.9.7-1.7 1.7-1.7zm2.8-1.7c.3 0 .6.2.6.6 0 .3-.2.6-.6.6-.3 0-.6-.2-.6-.6 0-.4.3-.6.6-.6zm-4.6-1h3.7c1.4 0 2.5 1.1 2.5 2.5v3.7c0 1.4-1.1 2.5-2.5 2.5H7.2c-1.4 0-2.5-1.1-2.5-2.5V7.2c-.1-1.4 1.1-2.5 2.5-2.5z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </li>
          <li>
            <a
              className="block h-8 w-8 fill-black hover:fill-shade-70"
              href="https://www.tiktok.com/@shopify"
              target="_blank"
            >
              <svg
                className="w-8 h-8 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 30C23.2843 30 30 23.2843 30 15C30 6.71573 23.2843 0 15 0C6.71573 0 0 6.71573 0 15C0 23.2843 6.71573 30 15 30ZM17.9679 11.937C19.1423 12.7643 20.551 13.2076 21.9952 13.2041V10.3838C21.2138 10.3841 20.4497 10.1579 19.7979 9.73365C19.3398 9.44298 18.9467 9.06336 18.6427 8.61802C18.3387 8.17268 18.1302 7.67098 18.0299 7.1436C17.9873 6.90737 17.9669 6.66779 17.9689 6.42789H15.0829V17.7069C15.0829 18.2146 14.92 18.7094 14.6173 19.1206C14.3146 19.5317 13.8877 19.8382 13.3975 19.9962C12.9073 20.1543 12.3789 20.1558 11.8878 20.0006C11.3966 19.8454 10.9679 19.5414 10.6627 19.1321C10.3576 18.7227 10.1916 18.2289 10.1886 17.7211C10.1856 17.2134 10.3456 16.7177 10.6458 16.3048C10.946 15.8919 11.3711 15.583 11.8604 15.4221C12.3496 15.2612 12.878 15.2566 13.37 15.409V12.5068C12.2944 12.3595 11.1987 12.539 10.2295 13.0213C9.26031 13.5037 8.46383 14.2658 7.94658 15.2058C7.42933 16.1458 7.21597 17.2188 7.33504 18.2814C7.4541 19.344 7.89992 20.3455 8.61286 21.1519C9.3258 21.9583 10.2719 22.5312 11.3246 22.794C12.3772 23.0568 13.4863 22.997 14.5035 22.6225C15.5207 22.2479 16.3975 21.5766 17.0166 20.6983C17.6357 19.82 17.9676 18.7766 17.9679 17.7075V11.937Z"
                ></path>
              </svg>
              <span className="sr-only">TikTok</span>
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
