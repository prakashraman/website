import React from "react";

export interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="flex gap-[20px] border-t border-line p-[80px] font-thin">
      <span>
        <a href="mailto:prakash.raman.ka@gmail.com">
          prakash.raman.ka@gmail.com
        </a>{" "}
        / +1 (437) 261-0658
      </span>
    </footer>
  );
};

export default Footer;
