const CustomCursor = ({ innerCursor, outerCursor }) => {
  return (
    <>
      <div className="inner--cursor" ref={innerCursor}></div>
      <div className="outer--cursor" ref={outerCursor}></div>
    </>
  );
};

export default CustomCursor;
