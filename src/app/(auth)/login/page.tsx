"use client";

import { useState } from "react";

import Link from "next/link";

import { signIn } from "next-auth/react";

import { Card, CardContent } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function LoginPage() {
  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/dashboard",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md rounded-[2rem] border bg-background/80 shadow-sm backdrop-blur">
      <CardContent className="p-8 md:p-10">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome back
          </h1>

          <p className="mt-3 text-muted-foreground">
            Continue your wellness journey with Sereniq.
          </p>
        </div>

        <div className="mt-8">
          <Button
            variant="outline"
            className="h-12 w-full rounded-xl"
            onClick={() =>
              signIn("google", {
                callbackUrl:
                  "/dashboard",
              })
            }
          >
            Continue with Google
          </Button>

          <div className="my-6 flex items-center gap-4">
            <Separator className="flex-1" />

            <span className="text-sm text-muted-foreground">
              OR
            </span>

            <Separator className="flex-1" />
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <Label>
                Email Address
              </Label>

              <Input
                type="email"
                placeholder="Enter your email"
                className="h-12 rounded-xl"
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>
                  Password
                </Label>

                <Link
                  href="/forgot-password"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Forgot password?
                </Link>
              </div>

              <Input
                type="password"
                placeholder="Enter your password"
                className="h-12 rounded-xl"
                value={password}
                onChange={(e) =>
                  setPassword(
                    e.target.value
                  )
                }
              />
            </div>

            <Button
              className="h-12 w-full rounded-xl"
              disabled={loading}
              onClick={handleLogin}
            >
              {loading
                ? "Logging in..."
                : "Login"}
            </Button>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don’t have an account?{" "}
            <Link
              href="/signup"
              className="font-medium text-foreground hover:underline"
            >
              Create one
            </Link>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}