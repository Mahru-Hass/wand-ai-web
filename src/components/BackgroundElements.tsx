const BackgroundElements = () => {
  return (
    <div className="absolute inset-0 opacity-20">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-500/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-500/30 rounded-full blur-xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-pulse" />
    </div>
  );
};

export default BackgroundElements;
