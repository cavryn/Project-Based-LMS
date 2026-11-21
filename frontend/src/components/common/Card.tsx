import React from 'react';

interface CardProps {
  title?: string;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  title,
  badge,
  children,
  className = '',
}) => {
  return (
    <div className={`neo-card p-5 grid gap-4 ${className}`}>
      {(title || badge) && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b-2 border-[var(--line)] pb-3">
          {title && <h3 className="font-bold text-lg">{title}</h3>}
          {badge && <div>{badge}</div>}
        </div>
      )}
      {children}
    </div>
  );
};
