import { useState } from "react";
import { CopyText, IconChevronUp } from "src/icons/icons";

interface CodeDisplayProps {
  codigo: string;
  descripcion: string;
}

export default function CodeDisplay({ codigo, descripcion }: CodeDisplayProps) {
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codigo);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setVisible(!visible)}
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <IconChevronUp
            className={`h-5 w-5 transition-transform duration-300 ${
              visible ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          visible ? "max-h-full opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
            Ejemplo
          </h3>
          <pre className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl text-sm overflow-hidden whitespace-pre-wrap wrap-break-word break-all text-gray-800 dark:text-gray-200">
            {descripcion}
          </pre>
        </div>
        <div className="relative">
          <div
            className={`absolute top-3 right-16 z-10 transition-all duration-300 pointer-events-none ${
              copied ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <span className="bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg">
              ¡Código copiado!
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 z-20 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors"
          >
            <CopyText />
          </button>
          <pre className="bg-gray-900 text-gray-100 p-6 pt-16 rounded-xl overflow-auto text-sm font-mono leading-relaxed">
            {codigo}
          </pre>
        </div>
      </div>
    </div>
  );
}
