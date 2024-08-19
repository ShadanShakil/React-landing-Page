function Button({ text, borderColor, bgColor, textColor }) {
  return (
    <button
      className={`border ${borderColor ? borderColor : "border-blue"} ${
        bgColor ? bgColor : "bg-white"
      } ${textColor ? textColor : "text-black"} rounded-md p-2 m-4`}
    >
      {text}
    </button>
  );
}

export default Button;
