import React from 'react';
import { cn } from '@/lib/utils';

interface MobileCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const MobileCard: React.FC<MobileCardProps> = ({
  children,
  className,
  onClick,
  hoverable = false
}) => {
  return (
    <div
      className={cn(
        'mobile-card',
        hoverable && 'cursor-pointer hover:shadow-md transition-shadow',
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};