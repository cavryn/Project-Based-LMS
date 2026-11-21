import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'soft' | 'warn' | 'danger' | 'ink' | 'default';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const variantStyles = {
    primary: 'bg-[var(--primary)] text-[var(--on-primary)]',
    soft: 'bg-[var(--primary-soft)] text-[var(--ink)]',
    warn: 'bg-[var(--warn)] text-[var(--on-warn)]',
    danger: 'bg-[var(--danger)] text-[var(--on-danger)]',
    ink: 'bg-[var(--ink)] text-[var(--bg)]',
    default: 'bg-[var(--surface-2)] text-[var(--ink)]',
  }[variant];

  return (
    <span className={`neo-badge ${variantStyles} ${className}`}>
      {children}
    </span>
  );
};
