import { MessageSquareMore, Paperclip, Users } from "lucide-react";
import Image from "next/image";

const infos = [
  {
    number: 20,
    icon: Users,
  },
  {
    number: 10,
    icon: MessageSquareMore,
  },
  {
    number: 30,
    icon: Paperclip,
  },
];

type Props = {
  hasTitle?: boolean;
};

export const BoardCard: React.FC<Props> = ({ hasTitle }) => {
  if (hasTitle)
    return (
      <div className="cursor-pointer rounded-md border bg-white shadow-sm hover:border-blue-600 dark:bg-slate-900">
        <div className="p-3">
          <h4>Trần Dỹ Khang 2003</h4>
        </div>
      </div>
    );

  return (
    <div className="cursor-pointer rounded-md border bg-white shadow-sm hover:border-blue-600 dark:bg-slate-900">
      <div className="relative h-[150px] overflow-hidden rounded-t-md">
        <Image
          alt="card"
          src="https://images.unsplash.com/photo-1730119986244-eb33b57b3950?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-3">
        <h4>Trần Dỹ Khang 2003</h4>
        <div className="mt-3 flex items-center gap-3">
          {infos.map(({ icon, number }, index) => {
            const Icon = icon;

            return (
              <div
                key={index}
                className="flex items-center gap-1 text-[12px] font-medium text-blue-800"
              >
                <Icon size={16} />
                <span>{number}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
