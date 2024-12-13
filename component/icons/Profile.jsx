import Svg, { Path } from "react-native-svg";

export default function ProfileIcon({
  width = 12,
  height = 12,
  fill = "white",
}) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5 2.29175C8.79614 2.29175 7.42505 3.66934 7.42505 5.36675C7.42505 7.01927 8.71595 8.36007 10.3458 8.43246C10.4446 8.42558 10.549 8.42524 10.6476 8.43239C12.2758 8.35923 13.5675 7.01932 13.575 5.36548C13.5744 3.66957 12.1961 2.29175 10.5 2.29175ZM6.17505 5.36675C6.17505 2.98082 8.10395 1.04175 10.5 1.04175C12.8869 1.04175 14.825 2.9799 14.825 5.36675L14.825 5.36935C14.8153 7.70301 12.9758 9.60503 10.6544 9.68306C10.6266 9.68399 10.5988 9.68308 10.5712 9.68031C10.531 9.67629 10.471 9.67576 10.415 9.68085C10.3892 9.68319 10.3633 9.68393 10.3374 9.68306C8.01638 9.60504 6.17505 7.70289 6.17505 5.36675Z"
        fill={fill}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.6437 10.3645C12.2505 10.3645 13.8891 10.7678 15.1554 11.6135C16.2936 12.3711 16.9458 13.4331 16.9458 14.576C16.9458 15.7187 16.2937 16.7826 15.1559 17.5443L15.1558 17.5444C13.8856 18.3942 12.245 18.7999 10.6374 18.7999C9.03018 18.7999 7.38986 18.3944 6.11979 17.5449C4.98136 16.7873 4.3291 15.7252 4.3291 14.5822C4.3291 13.4394 4.98114 12.3755 6.11892 11.6139L6.12122 11.6123L6.12122 11.6124C7.39491 10.7678 9.03665 10.3645 10.6437 10.3645ZM6.81313 12.6534C5.93509 13.2416 5.5791 13.9523 5.5791 14.5822C5.5791 15.212 5.93494 15.9205 6.81279 16.5046L6.81416 16.5055C7.83565 17.1889 9.22 17.5499 10.6374 17.5499C12.0548 17.5499 13.4391 17.189 14.4606 16.5055C15.3395 15.9172 15.6958 15.2061 15.6958 14.576C15.6958 13.9462 15.3399 13.2376 14.4621 12.6536L14.4611 12.653C13.4441 11.9737 12.0619 11.6145 10.6437 11.6145C9.22625 11.6145 7.83932 11.9734 6.81313 12.6534Z"
        fill={fill}
      />
    </Svg>
  );
}