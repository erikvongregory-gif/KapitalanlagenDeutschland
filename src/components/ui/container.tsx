import { cn } from "@/lib/utils";

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
  as?: "div" | "section";
  id?: string;
};

export function Container({
  className,
  children,
  as: Tag = "div",
  id,
}: ContainerProps) {
  return (
    <Tag id={id} className={cn("container-site", className)}>
      {children}
    </Tag>
  );
}
