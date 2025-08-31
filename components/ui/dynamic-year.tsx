"use client";
export default function DynamicYear() {
  return <span>{new Date().getFullYear() || 2025}</span>;
}
