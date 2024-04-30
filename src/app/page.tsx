import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/00949d69-ffd1-4d10-835e-e2402088254c-h68tvd.webp",
  "https://utfs.io/f/5d958cf4-19fe-4fab-b6fc-abc8d1d82f63-axoxfr.webp",
  "https://utfs.io/f/a3b629ee-415a-46ec-bdef-b00a8288664c-6oz30u.webp",
  "https://utfs.io/f/30e48c6d-63c7-40ee-85ff-f635928b0178-276u.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-[400px]">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
