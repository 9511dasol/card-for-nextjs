function Pagination() {
  return (
    <div className="p-4 flex items-center justify-between text-gray-500">
      <button disabled className="py-4 px4 rounded-md text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Prev
      </button>
      <div className="flex items-center gap-2 text-sm">
        <button className="px-2 rounded-sm bg-lamaSky">1</button>
        <button className="px-2 rounded-sm bg-lamaSky">2</button>
        <button className="px-2 rounded-sm bg-lamaSky">3</button>
        <span>...</span>
        <button className="px-2 rounded-sm bg-lamaSky">10</button>
      </div>
      <button className="py-4 px4 rounded-md text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
        Next
      </button>
    </div>
  );
}

export default Pagination;
