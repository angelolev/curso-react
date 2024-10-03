interface IButton {
  label: string;
  bgColor: string;
  fontColor: string;
}

const Button = ({ label, bgColor, fontColor }: IButton) => {
  return <button className={`bg-${bgColor} text-${fontColor}`}>{label}</button>;
};

export default Button;
