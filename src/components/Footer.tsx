import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex gap-[20px] border-t border-line p-[40px] font-thin lg:p-[80px]">
      <span>
        <a
          href="https://www.linkedin.com/in/prakash-raman-a68541b/"
          className="underline decoration-gray-500"
        >
          LinkedIn
        </a>
        &nbsp;/&nbsp;
        <a
          href="mailto:prakash.raman.ka@gmail.com"
          className="underline decoration-gray-500"
        >
          prakash.raman.ka@gmail.com
        </a>{" "}
        /{" "}
        <a href="tel:+14372610658" className="underline decoration-gray-500">
          +1 (437) 261-0658
        </a>
      </span>
    </footer>
  );
};

export default Footer;
