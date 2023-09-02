interface Props {
  children?: React.ReactNode;
  //eslint-disable-next-line
  [x: string]: any;
}

export default function TableHeadItem({ children, ...rest }: Props) {
  return (
    <th {...rest} scope="col" className=" px-6 py-4">{children}</th>
  );
}
