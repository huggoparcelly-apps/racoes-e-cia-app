

export default function ShearchInput() {
  return (
    <label className="relative block">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-1 pl-3 pr-3 shadow-sm focus:outline-none focus:border-yellow-900 focus:ring-yellow-900 focus:ring-1 sm:text-sm"
          placeholder="Buscar produto"
          type="text"
          name="search"
        />
    </label>
  )
}
