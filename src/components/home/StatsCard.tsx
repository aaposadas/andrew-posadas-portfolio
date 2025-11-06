export default function StatsCard() {
  return (
    <div className="flex flex-col md:flex-row md:gap-8 card-base md:items-center">
      <div className="p-4 border border-gray-800/50 rounded-xl bg-linear-to-br from-zinc-900/50 to-zinc-900">
        <h3>09 +</h3>
        <span className="text-sm text-gray-400">
          Years<br></br> of Experience
        </span>
      </div>
      <div className="p-4 border border-gray-800/50 rounded-xl bg-linear-to-br from-zinc-900/50 to-zinc-900">
        <h3>200K +</h3>
        <span className="text-sm text-gray-400">
          Users<br></br> Supported
        </span>
      </div>
      <div className="p-4 border border-gray-800/50 rounded-xl bg-linear-to-br from-zinc-900/50 to-zinc-900">
        <h3>100%</h3>
        <span className="text-sm text-gray-400">
          Committed to<br></br> Practical Solutions
        </span>
      </div>
    </div>
  );
}
