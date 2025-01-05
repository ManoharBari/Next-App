export default async function Page({ params }) {
  const { id } = await params;
  if (id.includes("a")) {
    return <div>My name: {id}</div>;
  }
  return <div>Not found</div>;
}
