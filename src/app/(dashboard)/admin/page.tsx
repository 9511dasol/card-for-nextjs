import UserCard from "@/components/UserCard";

const userCard:string[] = ["student", "teacher", "parent", "staff"];
function AdminPage() {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row ">
      {/* LEFT */}
      <div className="w-full lg:w-2/3">
        {/* User Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          {userCard.map((h) => (
            <UserCard type={h} />
          ))}
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
}

export default AdminPage;
