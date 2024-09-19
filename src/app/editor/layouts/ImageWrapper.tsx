import { ImageUpIcon } from 'lucide-react';
export default function ImageWrapper() {
  return (
    <div className="group flex h-40 w-full cursor-pointer items-center justify-center rounded-lg border border-gray-200 bg-white hover:border-dashed hover:border-slate-300 hover:bg-slate-50">
      <ImageUpIcon className="text-gray-100 group-hover:text-slate-300" size={40} />
    </div>
  );
}
