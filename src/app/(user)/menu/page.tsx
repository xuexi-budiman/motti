import { redirect } from "next/navigation";
import QRCode from "react-qr-code";

import { auth } from "@/auth";

const MenuPage = async () => {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div style={{ background: "white", padding: "16px" }}>
      <QRCode value="http://localhost:3000" />
    </div>
  );
};

export default MenuPage;
