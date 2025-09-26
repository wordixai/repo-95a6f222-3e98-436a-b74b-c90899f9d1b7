import React, { useState } from 'react';
import { MobileHeader } from '@/components/mobile/MobileHeader';
import { MobileCard } from '@/components/mobile/MobileCard';
import { MobileButton } from '@/components/mobile/MobileButton';
import { MobileInput } from '@/components/mobile/MobileInput';
import { MobileBottomNav } from '@/components/mobile/MobileBottomNav';
import { MobileList } from '@/components/mobile/MobileList';
import { 
  Home, 
  Search, 
  Heart, 
  User, 
  Bell, 
  Settings, 
  CreditCard, 
  Bookmark,
  TrendingUp,
  Star,
  MessageCircle
} from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: <Home className="h-5 w-5" /> },
    { id: 'search', label: 'Search', icon: <Search className="h-5 w-5" /> },
    { id: 'favorites', label: 'Favorites', icon: <Heart className="h-5 w-5" />, badge: 3 },
    { id: 'profile', label: 'Profile', icon: <User className="h-5 w-5" /> },
  ];

  const listItems = [
    {
      id: '1',
      title: 'Notifications',
      subtitle: 'Manage your alerts and updates',
      icon: <Bell className="h-5 w-5" />,
      badge: '12',
      onClick: () => console.log('Notifications clicked')
    },
    {
      id: '2',
      title: 'Payment Methods',
      subtitle: 'Cards and payment options',
      icon: <CreditCard className="h-5 w-5" />,
      onClick: () => console.log('Payment clicked')
    },
    {
      id: '3',
      title: 'Saved Items',
      subtitle: 'Your bookmarked content',
      icon: <Bookmark className="h-5 w-5" />,
      badge: 7,
      onClick: () => console.log('Saved clicked')
    },
    {
      id: '4',
      title: 'Settings',
      subtitle: 'App preferences and account',
      icon: <Settings className="h-5 w-5" />,
      onClick: () => console.log('Settings clicked')
    },
  ];

  const featuredItems = [
    {
      id: 'f1',
      title: 'Trending Now',
      subtitle: 'Most popular this week',
      icon: <TrendingUp className="h-5 w-5" />,
      onClick: () => console.log('Trending clicked')
    },
    {
      id: 'f2',
      title: 'Top Rated',
      subtitle: '4.8★ average rating',
      icon: <Star className="h-5 w-5" />,
      onClick: () => console.log('Top rated clicked')
    },
    {
      id: 'f3',
      title: 'Community',
      subtitle: 'Join the conversation',
      icon: <MessageCircle className="h-5 w-5" />,
      badge: 'New',
      onClick: () => console.log('Community clicked')
    },
  ];

  const handleLogin = async () => {
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="mobile-container">
      <MobileHeader 
        title="Mobile App"
        showSearch
        showMore
        onSearch={() => console.log('Search clicked')}
        onMore={() => console.log('More clicked')}
      />

      <div className="px-4 py-6 space-y-6 pb-20">
        {/* Login Form */}
        <MobileCard>
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Welcome Back</h2>
              <p className="text-muted-foreground mt-2">Sign in to continue</p>
            </div>

            <MobileInput
              label="Email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={setEmail}
              required
            />

            <MobileInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={setPassword}
              required
            />

            <MobileButton
              fullWidth
              loading={loading}
              onClick={handleLogin}
            >
              Sign In
            </MobileButton>

            <div className="flex gap-3">
              <MobileButton variant="outline" fullWidth>
                Register
              </MobileButton>
              <MobileButton variant="ghost" fullWidth>
                Forgot?
              </MobileButton>
            </div>
          </div>
        </MobileCard>

        {/* Featured Section */}
        <MobileCard>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Featured</h3>
            <MobileList items={featuredItems} />
          </div>
        </MobileCard>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <MobileCard hoverable onClick={() => console.log('Quick action 1')}>
            <div className="text-center py-2">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-mobile-primary" />
              <div className="text-sm font-medium">Analytics</div>
            </div>
          </MobileCard>
          
          <MobileCard hoverable onClick={() => console.log('Quick action 2')}>
            <div className="text-center py-2">
              <Star className="h-8 w-8 mx-auto mb-2 text-mobile-warning" />
              <div className="text-sm font-medium">Reviews</div>
            </div>
          </MobileCard>
        </div>

        {/* Settings List */}
        <MobileCard>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Settings</h3>
            <MobileList items={listItems} />
          </div>
        </MobileCard>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-3">
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-mobile-primary">142</div>
            <div className="text-xs text-muted-foreground">Orders</div>
          </MobileCard>
          
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-mobile-success">98%</div>
            <div className="text-xs text-muted-foreground">Success</div>
          </MobileCard>
          
          <MobileCard className="text-center">
            <div className="text-2xl font-bold text-mobile-warning">4.9</div>
            <div className="text-xs text-muted-foreground">Rating</div>
          </MobileCard>
        </div>
      </div>

      <MobileBottomNav
        items={navItems}
        activeId={activeTab}
        onItemClick={setActiveTab}
      />
    </div>
  );
};

export default Index;