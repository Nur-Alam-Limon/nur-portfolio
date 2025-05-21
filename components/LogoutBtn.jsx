import { Button } from "./ui/button";

export default function LogoutBtn() {

  const handleLogout = async () => {
    await fetch("/api/admin/logout", {
      method: "POST",
    });

    router.push("/super-admin/login");
  };

  return (
    <div className="absolute top-12 right-20">
      <Button onClick={handleLogout} variant="outline" className="cursor-pointer text-lg">
        Logout
      </Button>
    </div>
  );
}
