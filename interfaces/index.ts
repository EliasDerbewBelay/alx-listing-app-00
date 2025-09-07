export interface CardProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  ctaLabel?: string;
  onCta?: () => void;
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  disabled?: boolean;
}
