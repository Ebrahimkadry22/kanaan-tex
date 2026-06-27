import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        w-full
        mx-auto

        px-5
        sm:px-6
        md:px-8
        lg:px-10
        xl:px-12
        2xl:px-16

        max-w-screen-2xl

        ${className}
      `}
    >
      {children}
    </div>
  );
}