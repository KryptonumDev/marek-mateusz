'use client'
import { usePathname } from "next/navigation";

const Element = ({ As, children, ...props }) => {
  const pathname = usePathname();
  return (
    <As
      {...props}
      {...(props.href && pathname === '/' && {
        href: props?.href?.replace(/^\//, ''),
        'data-scroll-to': true,
        'data-scroll-to-offset': -123,
      })}
    >
      {children}
    </As>
  );
};

export default Element;