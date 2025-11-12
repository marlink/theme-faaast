'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLogo } from '@/lib/logo-context';
import { Upload, Type, RotateCcw } from 'lucide-react';

export function LogoSettings() {
  const { logo, updateLogo, resetLogo } = useLogo();
  const [logoText, setLogoText] = useState(logo.text || '');
  const [imageUrl, setImageUrl] = useState(logo.imageUrl || '');
  const [altText, setAltText] = useState(logo.altText || '');
  const [logoType, setLogoType] = useState<'text' | 'image'>(logo.type);

  const handleSave = () => {
    if (logoType === 'text') {
      updateLogo({
        type: 'text',
        text: logoText,
        altText: logoText,
      });
    } else {
      updateLogo({
        type: 'image',
        imageUrl: imageUrl,
        altText: altText,
      });
    }
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const result = await response.json();

        if (result.success) {
          setImageUrl(result.data.url);
        } else {
          alert(result.error || 'Failed to upload image');
        }
      } catch (error) {
        console.error('Upload error:', error);
        alert('Failed to upload image');
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Type className="w-5 h-5" />
          Logo Settings
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <Label className="text-base font-medium">Logo Type</Label>
          <RadioGroup
            value={logoType}
            onValueChange={(value: 'text' | 'image') => setLogoType(value)}
            className="mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="text" id="text-logo" />
              <Label htmlFor="text-logo" className="flex items-center gap-2">
                <Type className="w-4 h-4" />
                Text Logo
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="image" id="image-logo" />
              <Label htmlFor="image-logo" className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Image Logo
              </Label>
            </div>
          </RadioGroup>
        </div>

        {logoType === 'text' ? (
          <div className="space-y-4">
            <div>
              <Label htmlFor="logo-text">Logo Text</Label>
              <Input
                id="logo-text"
                value={logoText}
                onChange={e => setLogoText(e.target.value)}
                placeholder="Enter your website name"
                className="mt-1"
              />
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <Label htmlFor="logo-image">Logo Image</Label>
              <div className="mt-1">
                <Input
                  id="logo-image"
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-600 file:text-white hover:file:bg-orange-700"
                />
              </div>
              {imageUrl && (
                <div className="mt-2">
                  <img
                    src={imageUrl}
                    alt="Logo preview"
                    className="max-w-32 max-h-8 object-contain border rounded"
                  />
                </div>
              )}
            </div>
            <div>
              <Label htmlFor="alt-text">Alt Text</Label>
              <Input
                id="alt-text"
                value={altText}
                onChange={e => setAltText(e.target.value)}
                placeholder="Describe your logo for accessibility"
                className="mt-1"
              />
            </div>
          </div>
        )}

        <div className="flex gap-2 pt-4">
          <Button onClick={handleSave} className="bg-orange-600 hover:bg-orange-700">
            Save Logo
          </Button>
          <Button variant="outline" onClick={resetLogo} className="flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Reset to Default
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
