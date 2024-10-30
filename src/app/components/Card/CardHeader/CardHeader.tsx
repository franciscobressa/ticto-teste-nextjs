interface CardHeaderProps {
  children: React.ReactNode;
}
export default function CardHeader({ children }: CardHeaderProps) {
  return <div>{children}</div>;
}
