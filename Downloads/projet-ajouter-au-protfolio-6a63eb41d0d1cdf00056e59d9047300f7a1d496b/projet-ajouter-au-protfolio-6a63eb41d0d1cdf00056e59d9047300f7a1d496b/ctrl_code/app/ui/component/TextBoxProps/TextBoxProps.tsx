interface TextBoxProps {
  text: string;
  className?: string;
}

export const TextBox = ({ text, className }: TextBoxProps) => {
  return (
    <div
      className={`w-[228px] h-[37px] px-2 flex items-center border 
        border-gray_folio text-gray_folio ${className}`}
    >
      {text}
    </div>
  );
};
