export interface Burger {
  id: string;
  img: string;
  name: string;
  dsc: string;
  price: number;
  rate: number;
  country: string;
}

export default async function Home() {
  const data = await fetch("http://localhost:3005/burgers");
  const burgers: Burger[] = await data.json();

  return (
    <main className=" text-4xl bg-blue-100 h-screen container m-auto flex">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {burgers.map((burger) => (
          <div>
            <img
              className="h-auto max-w-full rounded-lg"
              src={burger.img}
              alt={burger.name}
            />
            <div className="text-lg flex justify-between">
              <div>{burger.name}</div>
              <div>${burger.price}</div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
