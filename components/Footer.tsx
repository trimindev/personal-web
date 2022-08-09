import React from "react";

function Footer() {
  return (
    <footer className="pt-10 pb-4 text-center dark:text-darkwhite-8 text-darkgray-11  text-sm">
      <span className="font-bold text-lg mr-2 dark:text-darkwhite-9 text-darkgray-9">
        trimindev
      </span>
      &copy; {new Date().getFullYear()} All Rights Reversed
    </footer>
  );
}

export default Footer;
