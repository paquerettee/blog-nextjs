"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import toast from "react-hot-toast";

export default function PostPageLayout({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const hasShownToast = useRef(false);

  useEffect(() => {
    const success = searchParams.get("success");
    if (success === "true" && !hasShownToast.current) {
      toast.success("Post saved!");
      hasShownToast.current = true;
    }
  }, [searchParams]);

  return <>{children}</>;
}
