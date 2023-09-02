interface TableHead {
  children?: React.ReactNode;

  // eslint-disable-next-line
  [x: string]: any;
}

export default function TableHead({ children, ...rest }: TableHead) {
  return (
    <thead
      className="border-b bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900"
      {...rest}
    >
      {children}
    </thead>
  );
}
