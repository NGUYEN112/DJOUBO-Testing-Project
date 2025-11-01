import { useEffect, useRef, useState } from "react";
import "./EnterpriseDropdown.scss";

export default function EnterpriseDropdown() {
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
      <button onClick={toggleDropdown} className="dropdown__btn">
        Section entreprise
        <span className="dropdown__icon" />
      </button>

      {open && (
        <ul className="dropdown__list">
            <li><a href="#">Taxi</a></li>
            <li><a href="#">Partner</a></li>
            <li><a href="#">Choice</a></li>
            <li><a href="#">Explanatory</a></li>
            <li><a href="#">Driver List</a></li>
        </ul>
      )}
    </li>
  );
}
