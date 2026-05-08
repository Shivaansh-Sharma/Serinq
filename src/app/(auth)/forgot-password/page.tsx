import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ForgotPasswordPage() {
  return (
    <Card className="w-full max-w-md rounded-[2rem] border bg-background/80 shadow-sm backdrop-blur">
      <CardContent className="p-8 md:p-10">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Reset password
          </h1>

          <p className="mt-3 text-muted-foreground">
            Enter your email and we’ll send you a reset link.
          </p>
        </div>

        <form className="mt-8 space-y-5">
          <div className="space-y-2">
            <Label>
              Email Address
            </Label>

            <Input
              type="email"
              placeholder="Enter your email"
              className="h-12 rounded-xl"
            />
          </div>

          <Button
            className="h-12 w-full rounded-xl"
          >
            Send Reset Link
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Remembered your password?{" "}
          <Link
            href="/login"
            className="font-medium text-foreground hover:underline"
          >
            Back to login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}