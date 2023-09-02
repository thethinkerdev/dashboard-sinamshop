interface Props {
  children?: React.ReactNode;
}

export default function TableBodyItem({ children }: Props) {
  return (
    <td className="whitespace-nowrap  px-6 py-4 font-medium">{children}</td>
  );
}
