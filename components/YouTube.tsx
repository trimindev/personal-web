export default function YouTube({ id }: { id: string }) {
  return (
    <div className="relative pb-[56.25%]  my-3 sm:my-4">
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className="w-full absolute h-full rounded-md"
      />
    </div>
  );
}
