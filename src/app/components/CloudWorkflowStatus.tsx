"use client";

import { useEffect, useState } from "react";
import { CheckCircle, Cloud, ShieldCheck } from "lucide-react";

type WorkflowState = "checking" | "online" | "fallback";

export default function CloudWorkflowStatus() {
  const [state, setState] = useState<WorkflowState>("checking");

  useEffect(() => {
    let mounted = true;

    async function checkWorkflow() {
      try {
        const response = await fetch("/api/cloud-health", {
          cache: "no-store",
        });

        if (!mounted) return;
        setState(response.ok ? "online" : "fallback");
      } catch {
        if (mounted) setState("fallback");
      }
    }

    checkWorkflow();

    return () => {
      mounted = false;
    };
  }, []);

  const online = state === "online";

  return (
    <div className="border border-slate-200 bg-white p-5 shadow-[0_16px_45px_rgba(8,27,51,0.06)]">
      <div className="flex items-start gap-4">
        <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl ${online ? "bg-emerald-50 text-emerald-700" : "bg-blue-50 text-blue-700"}`}>
          {online ? <CheckCircle size={22} aria-hidden /> : <Cloud size={22} aria-hidden />}
        </div>
        <div>
          <p className="font-extrabold text-[#081B33]">
            {online ? "Live cloud workflow online" : state === "checking" ? "Checking cloud workflow" : "Cloud workflow with email fallback"}
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            {online
              ? "Forms connect to RV IT Firebase Cloud Functions in asia-south1."
              : "If the live workflow is temporarily unavailable, contact@rvit.co.in remains available."}
          </p>
          <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500">
            <ShieldCheck size={14} aria-hidden />
            Contact and career submissions are routed through configured backend services.
          </div>
        </div>
      </div>
    </div>
  );
}
