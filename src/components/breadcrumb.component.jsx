import { A } from "@solidjs/router";

export function Breadcrumb({ links }) {
  return (
    <div className="text-sm breadcrumbs">
      <ul>
        {links.map((link) => (
          <li>
            <A href={link.value}>{link.label}</A>
          </li>
        ))}
      </ul>
    </div>
  );
}
