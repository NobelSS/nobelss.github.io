interface TechnologiesProps {
  techList: string[];
}

export default function Technologies({ techList }: TechnologiesProps) {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {techList.map((tech, index) => (
        <span
          key={index}
          className="bg-gray-800 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
