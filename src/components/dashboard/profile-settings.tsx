"use client";

import {
  useState,
  useTransition,
} from "react";

import { Save } from "lucide-react";

import { Button } from "@/components/ui/button";

import { updateProfile } from "@/lib/update-profile";

interface Props {
  initialName: string;

  email: string;
}

export function ProfileSettings({
  initialName,
  email,
}: Props) {
  const [name, setName] =
    useState(initialName);

  const [saved, setSaved] =
    useState(false);

  const [isPending, startTransition] =
    useTransition();

  function handleSave() {
    startTransition(async () => {
      try {
        await updateProfile(name);

        setSaved(true);

        setTimeout(() => {
          setSaved(false);
        }, 2000);
      } catch (error) {
        console.error(error);
      }
    });
  }

  return (
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      <div className="rounded-2xl border p-5">
        <p className="text-sm text-muted-foreground">
          Display Name
        </p>

        <input
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
          className="mt-3 w-full rounded-xl border bg-background px-4 py-3 outline-none transition-colors focus:border-emerald-500"
        />

        <Button
          onClick={handleSave}
          disabled={isPending}
          className="mt-4 rounded-xl"
        >
          <Save className="mr-2 h-4 w-4" />

          {saved
            ? "Saved"
            : "Save Changes"}
        </Button>
      </div>

      <div className="rounded-2xl border p-5">
        <p className="text-sm text-muted-foreground">
          Email
        </p>

        <p className="mt-3 break-all text-lg font-medium">
          {email}
        </p>
      </div>
    </div>
  );
}