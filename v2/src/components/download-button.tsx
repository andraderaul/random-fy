interface DownloadButtonProps {
  label: string;
  onClick: () => void;
}

export function DownloadButton({ label, onClick }: DownloadButtonProps) {
  return (
    <button
      onClick={onClick}
      className="rounded-xl border border-gray-300 px-5 py-2 text-sm font-medium hover:bg-gray-50 transition-colors"
    >
      {label}
    </button>
  );
}
