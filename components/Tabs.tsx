interface Props {
  tab1: JSX.Element;
  tab2: JSX.Element;
}

export default function Tabs({ tab1, tab2 }: Props) {
  return (
    <div>
      <div className="tab-1">{tab1}</div>
      <div className="tab-2">{tab2}</div>
    </div>
  );
}
