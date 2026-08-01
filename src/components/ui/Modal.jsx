import { useState, useRef, useEffect } from "react";
import Button from "./Button";
import CloseIcon from "@mui/icons-material/CloseRounded";

export default function Modal({ onUnMount, children }) {
  const [isClosing, setIsClosing] = useState(false);
  const dialogRef = useRef(null);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isClosing) onUnMount();
  };

  useEffect(() => {
    dialogRef.current?.showModal();
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black/50 backdrop-blur-md ${isClosing ? "animate-backdrop-out" : "animate-backdrop-in"}`}
        onClick={handleClose}
        onAnimationEnd={handleAnimationEnd}
      >
        <dialog
          ref={dialogRef}
          className="m-auto flex h-full w-[80%] items-center justify-center bg-transparent p-0.5"
          onClick={(e) => {
            e.stopPropagation();
            if (e.target === dialogRef.current) handleClose();
          }}
          onCancel={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >
          <div
            className={`bg-background border-border shadow-base flex h-full w-full flex-col items-center overflow-auto rounded-2xl border ${isClosing ? "animate-modal-out" : "animate-modal-in"}`}
            onAnimationEnd={handleAnimationEnd}
            dir="ltr"
          >
            <Button
              style={"sticky mr-auto top-0"}
              hover={false}
              border={false}
              onClick={handleClose}
            >
              <div className="transition-colors hover:text-rose-800">
                <CloseIcon />
              </div>
            </Button>
            <div className="w-full pb-6">{children}</div>
          </div>
        </dialog>
      </div>
    </>
  );
}
