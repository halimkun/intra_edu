import Svg, { Path } from "react-native-svg";

export default function CalculatorIcon({
  width = 24,
  height = 24,
  fill = "#0A0A0A",
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 1.25C7.42603 1.25 5.42914 1.7602 4.09467 3.09467C2.7602 4.42914 2.25 6.42603 2.25 9V15C2.25 17.574 2.7602 19.5709 4.09467 20.9053C5.42914 22.2398 7.42603 22.75 10 22.75H14C16.574 22.75 18.5709 22.2398 19.9053 20.9053C21.2398 19.5709 21.75 17.574 21.75 15V9C21.75 6.42603 21.2398 4.42914 19.9053 3.09467C18.5709 1.7602 16.574 1.25 14 1.25H10ZM3.75 9C3.75 6.57397 4.2398 5.07086 5.15533 4.15533C6.07086 3.2398 7.57397 2.75 10 2.75H14C16.426 2.75 17.9291 3.2398 18.8447 4.15533C19.7602 5.07086 20.25 6.57397 20.25 9V15C20.25 17.426 19.7602 18.9291 18.8447 19.8447C17.9291 20.7602 16.426 21.25 14 21.25H10C7.57397 21.25 6.07086 20.7602 5.15533 19.8447C4.2398 18.9291 3.75 17.426 3.75 15V9ZM8.25 7.58002C8.25 7.17098 8.58746 6.83002 9 6.83002H15C15.4158 6.83002 15.75 7.16423 15.75 7.58002V8.58002C15.75 8.98906 15.4125 9.33002 15 9.33002H9C8.59096 9.33002 8.25 8.99256 8.25 8.58002V7.58002ZM9 5.33002C7.75254 5.33002 6.75 6.34906 6.75 7.58002V8.58002C6.75 9.82748 7.76904 10.83 9 10.83H15C16.2475 10.83 17.25 9.81098 17.25 8.58002V7.58002C17.25 6.3358 16.2442 5.33002 15 5.33002H9ZM7.13612 14C7.13612 13.4477 7.58383 13 8.13612 13H8.14767C8.69996 13 9.14767 13.4477 9.14767 14C9.14767 14.5523 8.69996 15 8.14767 15H8.13612C7.58383 15 7.13612 14.5523 7.13612 14ZM11.9952 13C11.443 13 10.9952 13.4477 10.9952 14C10.9952 14.5523 11.443 15 11.9952 15H12.0068C12.5591 15 13.0068 14.5523 13.0068 14C13.0068 13.4477 12.5591 13 12.0068 13H11.9952ZM14.8544 14C14.8544 13.4477 15.3021 13 15.8544 13H15.8659C16.4182 13 16.8659 13.4477 16.8659 14C16.8659 14.5523 16.4182 15 15.8659 15H15.8544C15.3021 15 14.8544 14.5523 14.8544 14ZM8.13612 16.5C7.58383 16.5 7.13612 16.9477 7.13612 17.5C7.13612 18.0523 7.58383 18.5 8.13612 18.5H8.14767C8.69996 18.5 9.14767 18.0523 9.14767 17.5C9.14767 16.9477 8.69996 16.5 8.14767 16.5H8.13612ZM10.9952 17.5C10.9952 16.9477 11.443 16.5 11.9952 16.5H12.0068C12.5591 16.5 13.0068 16.9477 13.0068 17.5C13.0068 18.0523 12.5591 18.5 12.0068 18.5H11.9952C11.443 18.5 10.9952 18.0523 10.9952 17.5ZM15.8544 16.5C15.3021 16.5 14.8544 16.9477 14.8544 17.5C14.8544 18.0523 15.3021 18.5 15.8544 18.5H15.8659C16.4182 18.5 16.8659 18.0523 16.8659 17.5C16.8659 16.9477 16.4182 16.5 15.8659 16.5H15.8544Z"
        fill="#E7E135"
      />
    </Svg>
  );
}
