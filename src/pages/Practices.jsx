import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { initialPractices } from "../data/PracticesData";
import MinStatCard from "../components/ui/MinStatCard";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import CloseIcon from "@mui/icons-material/CloseRounded";

export default function Practices() {
  // const [practices, setPractices] = useState(initialPractices); // For later if client need to control Products like add or romove
  const [modalComponent, setModalComponent] = useState(null);
  const [modalCode, setModalCode] = useState(null);

  const practices = initialPractices;
  const practicesDetails = {
    allPractices: practices,
    easyPractices: practices.filter(
      (practice) => practice.difficulty === "easy",
    ),
    normalPractices: practices.filter(
      (practice) => practice.difficulty === "normal",
    ),
    hardPractices: practices.filter(
      (practice) => practice.difficulty === "hard",
    ),
  };

  function handleOpenComponent(jsxElement) {
    setModalComponent(jsxElement);
    return;
  }

  function handleOpenCode(jsxString) {
    setModalCode(jsxString.toString());
    return;
  }

  return (
    <div className="flex flex-col items-center gap-6">
      <h1 className="text-foreground word-spacing-hover-anime w-full text-2xl font-bold">
        تمرین ها
      </h1>
      <div className="flex w-full flex-col justify-center gap-4">
        <div className="flex w-full justify-center gap-4">
          <div className="w-1/4">
            <MinStatCard
              title={"کل تمرین ها"}
              value={practicesDetails.allPractices.length}
            >
              <p>
                <strong className="text-emerald-500">26%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"تمرین های ساده "}
              value={practicesDetails.easyPractices.length}
            >
              <p>
                <strong className="text-green-500">5%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"تمرین های متوسط"}
              value={practicesDetails.normalPractices.length}
            >
              <p>
                <strong className="text-amber-500">14%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>

          <div className="w-1/4">
            <MinStatCard
              title={"تمرین های سخت"}
              value={practicesDetails.hardPractices.length}
            >
              <p>
                <strong className="text-rose-500">8%+ </strong>
                نسبت به ماه قبل
              </p>
            </MinStatCard>
          </div>
        </div>
      </div>

      <div className="grid w-full grid-cols-4 grid-rows-2 gap-4">
        {practices.map((practice) => (
          <Practice
            key={practice.id}
            practice={practice}
            onOpenComponent={handleOpenComponent}
            onOpenCode={handleOpenCode}
          />
        ))}
      </div>

      {modalComponent && (
        <Modal onClose={() => setModalComponent(false)}>
          <div className="clear h-full w-full">{modalComponent}</div>
        </Modal>
      )}

      {modalCode && (
        <Modal onClose={() => setModalCode(false)}>
          <div className="w-full px-12">
            <SyntaxHighlighter language="jsx" style={atomDark}>
              {modalCode}
            </SyntaxHighlighter>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Practice({ practice, onOpenComponent, onOpenCode }) {
  return (
    <div className="bg-surface border-border group shadow-base col-span-2 flex flex-col rounded-2xl border p-4">
      <div className="flex items-center justify-between">
        <h3 className="h-18 py-4 text-lg">
          <span className="text-base">{practice.id}. </span>
          {practice.title}
        </h3>
        <Badge status={practice.difficulty} />
      </div>
      <div className="flex items-center justify-between">
        <Button
          style={"bg-accent-bg"}
          onClick={() => onOpenComponent(practice.jsxElement)}
        >
          باز کردن {practice.title}
        </Button>
        <Button
          style={"bg-accent-bg"}
          onClick={() => onOpenCode(practice.jsxString)}
        >
          دیدن کامپوننت <span className="text-xs">(کامپایل‌شده)</span>
        </Button>
      </div>
    </div>
  );
}

function Modal({ onClose, children }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
  };

  const handleAnimationEnd = () => {
    if (isClosing) onClose();
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-10 bg-black/50 backdrop-blur-md ${isClosing ? "animate-backdrop-out" : "animate-backdrop-in"}`}
        onClick={handleClose}
        onAnimationEnd={handleAnimationEnd}
      ></div>

      <div className="fixed inset-0 z-10 m-12 flex items-center justify-center">
        <div
          className={`border-border shadow-base bg-background flex h-full w-full flex-col items-center overflow-auto rounded-2xl border ${isClosing ? "animate-modal-out" : "animate-modal-in"}`}
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

          {children}
        </div>
      </div>
    </>
  );
}
