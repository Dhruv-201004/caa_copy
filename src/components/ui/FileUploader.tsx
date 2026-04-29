"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type FileUploaderProps = {
  name?: string;
  className?: string;
  defaultImageUrl?: string | null;
  maxSizeMB?: number;
};

export default function FileUploader({
  name = "image",
  className = "",
  defaultImageUrl = null,
  maxSizeMB = 5,
}: FileUploaderProps) {
  const [preview, setPreview] = useState<string | null>(defaultImageUrl);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    return () => {
      if (preview && preview.startsWith("blob:")) {
        URL.revokeObjectURL(preview);
      }
    };
  }, [preview]);

  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setError(null);
      const file = e.target.files?.[0] ?? null;
      if (!file) {
        setPreview(defaultImageUrl);
        setFileName(null);
        return;
      }

      if (!file.type.startsWith("image/")) {
        setError("Only image files are supported.");
        e.target.value = "";
        return;
      }

      const maxBytes = maxSizeMB * 1024 * 1024;
      if (file.size > maxBytes) {
        setError(`File too large. Max ${maxSizeMB} MB.`);
        e.target.value = "";
        return;
      }

      const url = URL.createObjectURL(file);
      setPreview(url);
      setFileName(file.name);
    },
    [defaultImageUrl, maxSizeMB],
  );

  const clear = useCallback(() => {
    if (inputRef.current) inputRef.current.value = "";
    setPreview(defaultImageUrl);
    setFileName(null);
    setError(null);
  }, [defaultImageUrl]);

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="sr-only">Upload image</label>
      <div className="flex items-center gap-3">
        <div className="h-20 w-28 overflow-hidden rounded-md bg-slate-50 border border-slate-200">
          {preview ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={preview}
              alt={fileName ?? "preview"}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-xs text-slate-400">
              No image
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex gap-2">
            <label className="inline-block rounded-md bg-navy-900 px-3 py-2 text-xs font-semibold text-ivory hover:bg-navy-800 cursor-pointer">
              Choose file
              <input
                ref={inputRef}
                name={name}
                type="file"
                accept="image/*"
                onChange={onFileChange}
                className="sr-only"
              />
            </label>
            <button
              type="button"
              onClick={clear}
              className="inline-block rounded-md border border-slate-200 px-3 py-2 text-xs text-slate-700"
            >
              Remove
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-500">
            {fileName ?? `Max ${maxSizeMB}MB. JPG, PNG, GIF.`}
          </div>
          {error ? (
            <div className="mt-1 text-xs text-red-600">{error}</div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
