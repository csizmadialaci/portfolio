"use client";
import { Button } from "@/components/ui/button";
import { LogoutFunction } from "../actions";

export default function Logout() {
  return (
    <div>
      <Button
        onClick={() => {
          LogoutFunction();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
