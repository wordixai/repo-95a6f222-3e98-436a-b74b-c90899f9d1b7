import React from 'react';
import { ArrowLeft, MoreHorizontal, Search } from 'lucide-react';

interface MobileHeaderProps {
  title: string;
  showBack?: boolean;
  showSearch?: boolean;
  showMore?: boolean;
  onBack?: () => void;
  onSearch?: () => void;
  onMore?: () => void;
}

export const MobileHeader: React.FC<MobileHeaderProps> = ({
  title,
  showBack = false,
  showSearch = false,
  showMore = false,
  onBack,
  onSearch,
  onMore
}) => {
  return (
    <div className="mobile-header flex items-center justify-between px-4 py-3 h-14">
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={onBack}
            className="p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
        )}
        <h1 className="text-lg font-semibold truncate">{title}</h1>
      </div>
      
      <div className="flex items-center gap-2">
        {showSearch && (
          <button
            onClick={onSearch}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <Search className="h-5 w-5" />
          </button>
        )}
        {showMore && (
          <button
            onClick={onMore}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        )}
      </div>
    </div>
  );
};