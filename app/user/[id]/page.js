export default async function Page({ params }) {

  // for check error page
  // throw new Error("This is a test error");

  const { id } = await params;
  return <div>User Name: {id}</div>;
}
