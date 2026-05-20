type IconLabelProps = {
  icon: React.ElementType;
  text: string;
  className?: string;
};

export default function IconLabel({ icon: Icon, text, className }: IconLabelProps) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ""}`}>
      <Icon size={16} />
      <span>{text}</span>
    </div>
  );
}