export function UilibCard({ title, children, actions }: { title: string; children?: React.ReactNode; actions?: React.ReactNode }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg">
      <div className="px-6 py-6">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {children}
        </p>
      </div>
      <div className="px-6 pt-4 pb-6">
        {actions}
      </div>
    </div>
  );
}

export default UilibCard;
