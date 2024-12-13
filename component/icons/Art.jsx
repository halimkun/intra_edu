import Svg, { Path } from "react-native-svg";

export default function ArtIcon({ width = 24, height = 24, fill = "#0EA497" }) {
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
        d="M20.2391 2.81015C18.4052 3.54417 16.1988 4.85623 14.1229 6.39503C12.9369 7.2742 11.8089 8.21596 10.8291 9.15011C12.761 9.62836 14.2903 11.1328 14.804 13.0506C17.3692 10.3479 19.9446 6.57659 21.1139 3.66085L21.117 3.65324L21.117 3.65325C21.2254 3.3913 21.1549 3.14055 20.9668 2.95737L20.9525 2.94303C20.8009 2.78723 20.5472 2.69804 20.2391 2.81015ZM13.488 14.3411C13.4199 12.2094 11.6701 10.4973 9.52376 10.49C9.30361 10.7358 9.09744 10.9785 8.90702 11.2169L8.90603 11.2181L7.54556 12.9361C8.3549 13.1452 9.12471 13.5753 9.77217 14.2316C10.3965 14.8566 10.815 15.5765 11.0251 16.3569L12.7108 15.0049L12.7108 15.0049C12.9661 14.8002 13.2256 14.5783 13.488 14.3411ZM6.1827 12.241C6.02412 12.4245 5.88454 12.6284 5.7682 12.8458C3.68054 13.1028 1.78893 14.6949 1.52439 17.1083L1.2547 19.5655C1.04018 21.4056 2.59711 22.9481 4.41336 22.7454L6.87175 22.4755L6.88757 22.4736C8.03429 22.3231 9.01852 21.8321 9.75027 21.1004L9.75358 21.097C10.5686 20.2717 11.0501 19.2179 11.1571 18.0994C11.3357 17.9973 11.4986 17.8864 11.6483 17.7787C11.6588 17.7711 11.6691 17.7632 11.6793 17.7551L13.6492 16.1751C16.9797 13.5046 20.9162 8.18121 22.5048 4.22257C22.8722 3.32974 22.5866 2.44609 22.0204 1.88971C21.4529 1.31207 20.5731 1.08471 19.708 1.40728L19.6918 1.41353C17.6975 2.21022 15.3728 3.60136 13.2297 5.19C11.0866 6.7786 9.07765 8.5998 7.73402 10.2819L7.73205 10.2844L6.1827 12.241ZM6.31738 14.3091C6.43984 14.303 6.57295 14.3063 6.71768 14.3129L6.80102 14.3175C7.47203 14.4105 8.14039 14.731 8.6997 15.2903C9.25822 15.8489 9.55881 16.4787 9.64638 17.1474L9.64921 17.167C9.65371 17.1955 9.65766 17.2248 9.6611 17.2548L9.66622 17.327C9.67388 17.4335 9.67992 17.5175 9.67992 17.62C9.67992 18.5248 9.33627 19.3839 8.68794 20.0414C8.20129 20.5273 7.52871 20.875 6.69985 20.9854L4.2481 21.2545L4.24649 21.2547C3.38415 21.3512 2.64149 20.6159 2.74481 19.7377L3.01546 17.2717C3.21014 15.4953 4.69126 14.3429 6.29538 14.3099C6.30272 14.3097 6.31005 14.3095 6.31738 14.3091Z"
        fill={fill}
      />
    </Svg>
  );
}
