export const createQueryString = ({
  searchParams,
  name,
  value,
}: {
  searchParams?: any;
  name: string;
  value: string | number | boolean;
}) => {
  const params = new URLSearchParams(searchParams);
  params.set(name, String(value));

  return params.toString();
};
