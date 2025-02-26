import contactImage from "../assets/images/me.jpeg";

export default function Right() {
  return (
    <div 
      className="w-70 h-70 rounded-full sm:block lg:hidden bg-cover relative"
      style={{ backgroundImage: `url(${contactImage})` }}
    />
  );
}