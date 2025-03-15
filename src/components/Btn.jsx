const Btn = ({ btn, handleonclick }) => {
  return (
    <button className="btnb"
    onClick={handleonclick}>
      {btn}
    </button>
  );
};

export default Btn;
