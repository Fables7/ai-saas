import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div>
      <p>hello (protected)</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
