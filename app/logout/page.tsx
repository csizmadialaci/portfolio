"use client";
import { Button } from "@/components/ui/button";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";

export default function Logout() {
  return (
    <div>
      <LogoutLink>
        <Button>Logout</Button>
      </LogoutLink>
    </div>
  );
}
