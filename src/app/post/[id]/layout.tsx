import Link from "next/link";

export default function PostPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href={`/`}>
        <button className="mt-2 text-blue-600 underline">Back</button>
      </Link>
      {children}
    </>
  );
}
