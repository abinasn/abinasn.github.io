import { Link, useParams } from "react-router";
import { EntryList } from "@/components/hub/EntryList";
import { Pill } from "@/components/ui/Pill";
import { findTrack, getHubTree, tracks } from "@/lib/hub";
import { NotFound } from "./NotFound";

export function HubTrackIndex() {
  const { series = "" } = useParams();
  const track = findTrack(series);

  if (!track) return <NotFound />;

  const tree = getHubTree();
  const entries = tree.find((entry) => entry.id === track.id)?.entries ?? [];

  return (
    <div className="w-full px-5 md:px-8 lg:px-11.5">
      <div className="mx-auto w-full max-w-hub pt-7 pb-18 md:pt-10 md:pb-24 lg:pt-11 lg:pb-28">
      <nav aria-label="Breadcrumb" className="mb-4">
        <ol className="text-dim flex flex-wrap items-center gap-2.5 font-mono text-[11.5px]">
          <li>
            <Link to="/hub" className="text-accent hover:underline">
              learning hub
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page">{track.name}</li>
        </ol>
      </nav>

      <h1 className="text-[30px] leading-[1.1] font-extrabold tracking-[-1px] md:text-[36px] md:tracking-[-1.4px] lg:text-[42px] lg:tracking-[-1.8px]">
        {track.name}
      </h1>

      <p className="text-ink-soft mt-4 text-[16px] leading-[1.6] text-pretty md:text-[17px] lg:text-[18px]">
        {track.blurb}
      </p>

      <div className="mt-9">
        <EntryList entries={entries} />
      </div>

      <div className="mt-8 flex flex-wrap gap-1.75">
        {tracks
          .filter((entry) => entry.id !== track.id)
          .map((entry) => (
            <Link key={entry.id} to={`/hub/${entry.id}`}>
              <Pill>{entry.name}</Pill>
            </Link>
          ))}
      </div>
      </div>
    </div>
  );
}
