'use client';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function AdminLoginPage() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {
        setIsLoading(true);
        // Simulate API call for login
        setTimeout(() => {
            router.push('/admin/dashboard');
        }, 1500);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="mb-8">
                <Logo />
            </div>
            <Card className="w-full max-w-sm neon-border">
                <CardHeader className="text-center">
                    <CardTitle className="font-headline text-2xl text-primary">Admin Panel</CardTitle>
                    <CardDescription>Secure login for administrators</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="admin@alphaultimate.com" defaultValue="admin@alphaultimate.com"/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" defaultValue="password"/>
                    </div>
                    <Button onClick={handleLogin} disabled={isLoading} className="w-full neon-button">
                        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Sign In
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
