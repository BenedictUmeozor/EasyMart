type Props = {
  title: string;
};

export default function Title({ title }: Props) {
  return (
    <div className="flex items-center gap-2">
      <div className="h-8 w-4 bg-crimson rounded"></div>
      <p className="text-[0.9rem] font-bold capitalize">{title}</p>
    </div>
  );
}
