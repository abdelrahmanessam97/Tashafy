import { Card, CardContent } from "@/components/ui/card";
import type { PartnerItem } from "@/types/ourPartners";
import Image from "next/image";
import Link from "next/link";

type PartnerCardProps = {
  partner: PartnerItem;
};

export function PartnerCard({ partner }: PartnerCardProps) {
  const content = (
    <Card className="h-full border-0 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="flex items-center justify-center p-6 min-h-[120px] md:min-h-[140px]">
        <Image
          src={partner.logo}
          alt={partner.name}
          width={160}
          height={80}
          className="w-full h-auto max-h-16 object-contain object-center"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </CardContent>
    </Card>
  );

  if (partner.href) {
    return (
      <Link
        href={partner.href}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-xl"
      >
        {content}
      </Link>
    );
  }

  return content;
}
