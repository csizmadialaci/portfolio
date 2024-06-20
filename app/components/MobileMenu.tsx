import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navgiationItems } from "./Navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileMenu() {
  const pathName = usePathname();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu className="h-4 w-4"></Menu>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className="mt-5 flex flex-col px-2 space-y-1 ">
          {navgiationItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                pathName === item.href
                  ? "bg-muted"
                  : "hover:bg-muted hover:bg-opacity-75",
                "group flex items-center px-2 py-2 text-md font-semibold rounded-md"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <SheetFooter className="mt-5">
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
