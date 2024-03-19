import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  largeText: string;
  smallText: string;
};
export default function Service({ children, largeText, smallText }: Props) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="h-20 w-20 rounded-[50%] bg-[#ccc] flex items-center justify-center mx-auto">
          <div className="w-14 h-14 bg-black rounded-[50%] flex items-center justify-center">
            {children}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h4 className="uppercase mb-1 font-semibold">{largeText}</h4>
        <p className="text-[0.9rem] text-[#333]">{smallText}</p>
      </div>
    </div>
  );
}
