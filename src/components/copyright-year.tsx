"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();
const getServerYear = () => null;

export function CopyrightYear() {
  const year = useSyncExternalStore(subscribe, getYear, getServerYear);
  return <span className="footer-year">© {year ?? ""}</span>;
}
