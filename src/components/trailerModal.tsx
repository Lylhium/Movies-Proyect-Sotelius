import React, { useEffect, useCallback } from "react";

export function TrailerModal({ trailer, onClose }: any) {
  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, [handleEscape]);

  const handleClose = () => {
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70'
      onClick={handleBackdropClick}
    >
      <div className='w-full max-w-screen-md'>
        <div className='rounded-lg p-4'>
          <button
            onClick={handleClose}
            className='absolute top-2 right-2 text-gray-500 hover:text-gray-800 '
          >
            x
          </button>
          <div className='relative' style={{ paddingBottom: "56.25%" }}>
            <iframe
              className='absolute top-0 left-0 w-full h-full'
              src={`https://www.youtube.com/embed/${trailer.results[0].key}`}
              title='Trailer'
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
