import type { FooterColumnProps } from "@/types/global";
import Link from "next/link";

export function FooterColumn({ title, links, locale, labels }: FooterColumnProps) {
  const prefix = `/${locale}`;
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-[#686E7D]">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map(({ key, path }) => (
          <li key={key}>
            <Link href={`${prefix}${path}`} className="text-base text-[#4E5663] transition-colors hover:text-[#363085]">
              {labels[key]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
