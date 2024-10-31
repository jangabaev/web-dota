export const GeroysImg = ({ data }: { data: any[] }) => {
  return (
    <div className="w-full flex">
      {data.map((el) => (
        <img src={`/img/${el.photo}`} className="w-1/5 h-[45px]" />
      ))}
    </div>
  );
};
