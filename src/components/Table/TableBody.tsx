interface TableBody {
  children?: React.ReactNode;

  // eslint-disable-next-line
  [x: string]: any;
}

export default function TableBody({ children, ...rest }: TableBody) {
  return <tbody {...rest}>{children}</tbody>;
}
