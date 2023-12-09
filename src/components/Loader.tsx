import { useState } from "react";

export function Loader({
  children,
}: {
  children: (loading: boolean, setLoading: (v: boolean) => void) => JSX.Element;
}) {
  const [loading, setLoading] = useState(false);
  return children(loading, (v) => setLoading(v));
}
