import HomeClient from "./components/HomeClient";

export default async function HomePage() {
  return (
    <div className="max-w-4xl mx-auto rounded-lg shadow-md border border-blue-100 p-8">
      <HomeClient />
    </div>
  );
}
