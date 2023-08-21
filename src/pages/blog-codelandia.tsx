import { useState } from "react";
import Heart from "../components/icons/Heart";

interface ICardProps {
  data: Date;
  title: string;
  content: string;
}
function Card({ content, title, data }: ICardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <li className="flex flex-col bg-white shadow-lg font-lexend rounded-lg my-10">
      <div className="flex justify-between px-5 pt-5 pb-2">
        <span className="text-[#00000086]">{data.toLocaleDateString()}</span>
        <button onClick={() => setLiked(!liked)}>
          <Heart color={liked ? "#FF0000" : "#574AE8"} />
        </button>
      </div>
      <main className="px-5 pb-5">
        <h2 className="text-lg text text-[#000000e5]">{title}</h2>
        <span className="text-[#00000086]">{content}</span>
      </main>
    </li>
  );
}

export default function BlogCodelandia() {
  const posts: ICardProps[] = [
    {
      data: new Date(),
      title: "Agora é oficial: o Windows 11 está vindo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
    },
    {
      data: new Date(),
      title: "Agora é oficial: o Windows 11 está vindo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
    },
    {
      data: new Date(),
      title: "Agora é oficial: o Windows 11 está vindo",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum auctor est. Nam vitae finibus ante. Duis lobortis tellus vel diam fringilla, eu ullamcorper ex iaculis.",
    },
  ];

  return (
    <div className="bg-[#F3F5F7] min-h-screen">
      <header className="bg-gradient-to-r from-[#574AE8] to-[#3EA1DB] flex flex-col ">
        <span className="flex justify-between font-lexend text-white my-11 flex-wrap container gap-x-32">
          <h1 className="text-3xl">Codelândia</h1>
          <span className="text-2xl">blog</span>
        </span>

        <input
          id="search"
          type="text"
          className=" bg-white bg-opacity-20 ring-1 focus:ring-white outline-none container py-4 rounded-md font-lexend placeholder:text-white placeholder:opacity-80 indent-16 mb-5"
          placeholder="Pesquisar no blog"
        />
      </header>

      <main className="container m-auto py-7">
        <ul>
          {posts.map((i, key) => (
            <Card key={key} {...i} />
          ))}
        </ul>
      </main>
    </div>
  );
}
