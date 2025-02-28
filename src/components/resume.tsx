import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Button from "./button";

const resumePDF = new URL('../assets/data/Abinas_Patra.pdf', import.meta.url).href;


export default function Left() {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Abinas_Patra.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <Button onClick={() => handleDownload()} variant="primary" className="mt-4">
      <ArrowDownTrayIcon className='w-4 h-4 font-sans' />
      Resume
    </Button>
  )
}