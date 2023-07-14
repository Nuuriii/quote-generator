interface ButtonsProps {
   click: () => void;
   className: string;
   text: string;
}

export const Buttons = ({ click, className, text }: ButtonsProps) => {
   return (
      <button onClick={click} className={className}>
         {text}
      </button>
   );
};
