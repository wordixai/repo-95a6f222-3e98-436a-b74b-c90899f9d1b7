import React from 'react';
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-react';

interface ListItem {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  badge?: string | number;
  onClick?: () => void;
}

interface MobileListProps {
  items: ListItem[];
  className?: string;
}

export const MobileList: React.FC<MobileListProps> = ({ items, className }) => {
  return (
    <div className={cn('divide-y divide-border', className)}>
      {items.map((item) => (
        <div
          key={item.id}
          className={cn(
            'flex items-center px-4 py-3 transition-colors',
            item.onClick && 'cursor-pointer hover:bg-mobile-surface-variant'
          )}
          onClick={item.onClick}
        >
          {item.icon && (
            <div className="mr-3 text-muted-foreground">
              {item.icon}
            </div>
          )}
          
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-foreground truncate">
              {item.title}
            </div>
            {item.subtitle && (
              <div className="text-sm text-muted-foreground truncate">
                {item.subtitle}
              </div>
            )}
          </div>
          
          {item.badge && (
            <div className="ml-2 px-2 py-1 bg-mobile-primary/10 text-mobile-primary text-xs rounded-full">
              {item.badge}
            </div>
          )}
          
          {item.onClick && (
            <ChevronRight className="ml-2 h-4 w-4 text-muted-foreground" />
          )}
        </div>
      ))}
    </div>
  );
};