import { useEffect, useRef, useState } from "react";
import "./CompaniesDropdown.scss";

export default function CompaniesDropdown() {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = () => setOpen((prev) => !prev);

  return (
    <li ref={dropdownRef} className={`dropdown ${open ? "is-open" : ""}`}>
      <button onClick={toggleDropdown} className="dropdown__btn font-16 lh-24 font-fm-pr">
        Section entreprise
        <span className="dropdown__icon" />
      </button>

      {open && (
        <ul className="dropdown__list radius-8 min-w220 pad-y-8">
            <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/taxi">Société de taxi</a></li>
            <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/enterprise">Entreprise & Corporate</a></li>
            <li><a className="pad-y-1 pad-x-16 font-16 lh-24 font-fm-pr" href="/partner">Devenir partenaire</a></li>
        </ul>
      )}
    </li>
  );
}
