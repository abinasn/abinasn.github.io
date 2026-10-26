import { useNavigation } from "react-router";

export function LinkPending({
  href,
  className = "",
}: {
  href: string;
  className?: string;
}) {
  const navigation = useNavigation();
  const pending =
    navigation.state === "loading" && navigation.location.pathname === href;

  return (
    <span
      aria-hidden
      data-link-hint={pending ? "pending" : "idle"}
      className={`bg-accent ml-1.5 inline-block size-1.5 shrink-0 rounded-full align-middle ${className}`}
    />
  );
}
