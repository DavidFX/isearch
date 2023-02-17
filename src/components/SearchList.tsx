// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

interface Data {
  post: string[];
}

const SearchList = ({ post }: Data) => {
  const result = post.map((element) => (
    <div key={element.position} className="flex flex-col gap-2">
      <a
        className="link-hover link-secondary link text-lg"
        target="_blank"
        href={element.url}
      >
        {element.title}
      </a>
      <p className="text-sm sm:text-base">{element.description}</p>
    </div>
  ));

  return (
    <div className="mt-12 flex max-w-2xl flex-col gap-8 px-8 md:px-20">
      {result}
    </div>
  );
};

export default SearchList;
