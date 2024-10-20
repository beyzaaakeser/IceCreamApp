const Button = ({ icon }) => {
  return (
    <button className="cursor-pointer border border-white/50 bg-white/15 rounded-2xl p-4 hover:scale-95  hover:bg-white/25 transition ">
      <img src={icon} />
    </button>
  );
};
export default Button;
