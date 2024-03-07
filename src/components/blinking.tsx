const BlinkingCursor = ({ text = "" }) => {
  return (
    <div className="typing overflow-hidden border-r-2  whitespace-nowrap font-mono px-2 text-white text-4xl">
      {text}
    </div>
  );
};

export default BlinkingCursor;
