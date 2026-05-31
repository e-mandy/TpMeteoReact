const StatsCard = ({
  ...data
}: {
  title: string;
  value: number | string | React.ReactNode;
}) => {
  return (
    <div className="px-4 py-6 rounded-sm bg-white shadow w-1/4">
      <h4 className="text-sm">{data.title}</h4>
      <div className="text-2xl">{data.value}</div>
    </div>
  );
};

export default StatsCard;
