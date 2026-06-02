import { NavLink as RouterNavLink } from "react-router-dom";
import { useTransition } from "./PageTransition";

export default function NavLink({ to, onClick, ...props }) {
  const { navigateWithTransition } = useTransition();

  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
    if (event.defaultPrevented) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (event.button !== 0) return;
    event.preventDefault();
    navigateWithTransition(to);
  };

  return <RouterNavLink to={to} onClick={handleClick} {...props} />;
}
