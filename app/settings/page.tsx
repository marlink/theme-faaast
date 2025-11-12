import { LogoSettings } from '@/components/logo-settings';
import { Navigation } from '@/components/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Settings, Palette, Globe, Save, X } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const router = useRouter();

  const handleSaveAndClose = () => {
    // Here you could save settings to localStorage or API
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-zinc-900">
      <Navigation />

      <div className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">Website Settings</h1>
                <p className="text-zinc-400 text-lg">
                  Customize your website appearance and branding
                </p>
              </div>
              <Button
                onClick={handleSaveAndClose}
                className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2"
                size="lg"
              >
                <Save className="w-4 h-4" />
                Save and Close
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Settings */}
              <div className="lg:col-span-2 space-y-6">
                <LogoSettings />

                {/* Quick Links */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Quick Links
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Link
                        href="/theme-studio"
                        className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                      >
                        <Palette className="w-5 h-5 text-orange-500 group-hover:text-orange-400" />
                        <div>
                          <div className="font-medium text-white">Theme Studio</div>
                          <div className="text-sm text-zinc-400">Customize colors and styling</div>
                        </div>
                      </Link>

                      <Link
                        href="/"
                        className="flex items-center gap-3 p-4 bg-zinc-800 rounded-lg hover:bg-zinc-700 transition-colors group"
                      >
                        <Globe className="w-5 h-5 text-orange-500 group-hover:text-orange-400" />
                        <div>
                          <div className="font-medium text-white">View Homepage</div>
                          <div className="text-sm text-zinc-400">See your changes live</div>
                        </div>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Settings className="w-5 h-5" />
                      Settings Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Logo Type</span>
                      <span className="text-sm font-medium text-white">Configurable</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Theme System</span>
                      <span className="text-sm font-medium text-white">Advanced</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Responsive Design</span>
                      <span className="text-sm font-medium text-white">Mobile-First</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-zinc-400">Performance</span>
                      <span className="text-sm font-medium text-white">Optimized</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Need Help?</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-zinc-400 mb-4">
                      Have questions about customizing your website?
                    </p>
                    <Link
                      href="/contact"
                      className="text-orange-500 hover:text-orange-400 text-sm font-medium"
                    >
                      Contact us →
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
