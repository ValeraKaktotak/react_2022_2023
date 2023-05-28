import { UserRepo } from '../models/models'

export function RepoCard({ repo }: { repo: UserRepo }) {
  return (
    <div className="border px-2 py-4 rounded mb-2 hover:bg-slate-400 hover:shadow-md transition-all">
      <h2 className="text-lg font-bold">{repo.full_name}</h2>
      <p className="text-sm">
        Forks: <span className="font-bold mb-2">{repo.forks}</span>
        Watchers: <span className="font-bold mb-2">{repo.watchers}</span>
      </p>
      <p className="text-sm font-thin">
        <span>{repo?.description}</span>
      </p>
    </div>
  )
}
