const NotFound = () => {
  return (
    <>
      <div className="not-found container mx-auto min-h-screen mt-20 section-title flex flex-col gap-10">
        <h2>Page</h2>
        <h2 className="flex gap-10">
          <span className="text-cyan-400">404</span>
          <span>Not</span>
        </h2>
        <h2>Found</h2>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </>
  );
};

export default NotFound;
