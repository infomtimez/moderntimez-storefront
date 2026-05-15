export default function Loading() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-4 w-28 animate-pulse rounded bg-[#e5e1d8]" />
      <div className="mt-4 h-12 w-72 max-w-full animate-pulse rounded bg-[#e5e1d8]" />
      <div className="mt-6 h-24 max-w-2xl animate-pulse rounded bg-[#f0ebe2]" />
    </main>
  );
}
