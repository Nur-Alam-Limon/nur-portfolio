
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

export default function LogoutBtn() {
  const router = useRouter();
  const path = usePathname();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/super-admin/login");
  };

  return (
    <div className="mt-20">
      {path.startsWith("/super-admin/dashboard") && (
        <Button
          onClick={handleLogout}
          className="cursor-pointer rounded-sm text-md"
        >
          Logout
        </Button>
      )}
    </div>
  );
}
