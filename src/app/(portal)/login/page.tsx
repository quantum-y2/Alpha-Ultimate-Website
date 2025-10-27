'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2 } from 'lucide-react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function PortalLoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleAuthAction = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      router.push('/portal/dashboard');
    }, 1500);
  };
  
  return (
    <div className="flex items-center justify-center py-12 px-4 min-h-[calc(100vh-12rem)]">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="neon-border">
            <CardHeader>
              <CardTitle className="font-headline text-primary">Client Login</CardTitle>
              <CardDescription>Access your secure manpower request portal.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">Email</Label>
                <Input id="email-login" type="email" placeholder="you@contractor.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-login">Password</Label>
                <Input id="password-login" type="password" />
              </div>
              <Button onClick={handleAuthAction} disabled={isLoading} className="w-full neon-button">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign In
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="register">
          <Card className="neon-border-accent">
            <CardHeader>
              <CardTitle className="font-headline text-accent">Create Account</CardTitle>
              <CardDescription>Register for portal access to manage your manpower needs.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
               <div className="space-y-2">
                <Label htmlFor="company-name">Company Name</Label>
                <Input id="company-name" placeholder="Your Company LLC" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-register">Email</Label>
                <Input id="email-register" type="email" placeholder="you@contractor.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-register">Password</Label>
                <Input id="password-register" type="password" />
              </div>
              <Button onClick={handleAuthAction} disabled={isLoading} className="w-full">
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Register
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
