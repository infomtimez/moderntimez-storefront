export default async function CollectionPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  return <main><h1>Collection: {handle}</h1></main>;
}
