export default async function UserPage({
  params,
}: {
  params: Promise<{ user_id: string }>;
}) {
  const { user_id } = await params;

  return <div>{user_id}</div>;
}
