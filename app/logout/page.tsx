import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import createKindeClient from "@kinde-oss/kinde-auth-pkce-js";

export default async function Logout() {
  const kinde = await createKindeClient({
    client_id: "f0a14712207243a39101d094c048f304",
    domain: "https://csizmadialaszlo.kinde.com",
    redirect_uri: window.location.origin,
  });

  return (
    <div>
      <Button
        onClick={async () => {
          await kinde.logout();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
