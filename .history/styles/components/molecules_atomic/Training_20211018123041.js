export default function Training({ training }) {
  return (
    <div>
      <span>{training.id}</span>
      {" : "}
      <span className="cursor-pointer border-b border-collapse hover:bg-gray-50">
        {training.created_at}
      </span>
    </div>
  );
}
