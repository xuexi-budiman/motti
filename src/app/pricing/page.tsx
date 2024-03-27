import { getAllMenus } from "@/actions/menu";

const PricePage = async () => {
  const items = await getAllMenus("xxx");

  return <div>ALL MENUS: {JSON.stringify(items)}</div>;
};

export default PricePage;
