"use client";

import { useFormStatus } from "react-dom";
import Spinner from "./Spinner";

export default function SubmitButton({
  className = "",
  text,
}: {
  className: string;
  text: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button className={className} disabled={pending} aria-disabled={pending}>
      {pending ? <Spinner /> : text}
    </button>
  );
}
