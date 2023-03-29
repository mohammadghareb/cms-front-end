import { withObserverAndTheme } from "../strengthen-render";

  
const Margin = withObserverAndTheme<{
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}>((props) => {
 // @ts-ignore\n 
  const { children, top = 0, left = 0, right = 0, bottom = 0 } = props;

  return (
    <div
      style={{
        display: "flex",
        marginTop: top > 0 ? top : 0,
        marginLeft: left > 0 ? left : 0,
        marginRight: right > 0 ? right : 0,
        marginBottom: bottom > 0 ? bottom : 0
      }}
    >
      {children}
    </div>
  );
});

export default Margin;
