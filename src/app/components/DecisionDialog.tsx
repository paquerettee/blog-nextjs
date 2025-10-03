"use client";

import React from "react";

type DecisionDialogProps = {
  message: string;
  onConfirm: () => void;
  onReject: () => void;
  confirmLabel?: string;
  rejectLabel?: string;
};

export default function DecisionDialog({
  message,
  onConfirm,
  onReject,
  confirmLabel = "Yes",
  rejectLabel = "No",
}: DecisionDialogProps) {
  return (
    <div className="fixed inset-0 bg-transparent backdrop-blur-[2px] flex items-center justify-center z-50">
      <div className="bg-gray-100 p-6 rounded-lg shadow-xl text-center max-w-sm border border-gray-300">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">{message}</h2>
        <div className="flex justify-center gap-4">
          <button
            onClick={onReject}
            className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded hover:bg-gray-200 transition-colors"
          >
            {rejectLabel}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
